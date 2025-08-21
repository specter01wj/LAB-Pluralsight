import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Coffee } from '../types/coffee';
import { Observable, TimeoutError, of, throwError, timer  } from 'rxjs';
import { retry, catchError, tap, map, timeout } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CoffeeApiService {
  private apiURL = 'https://fake-coffee-api.vercel.app/api';

  constructor(private http: HttpClient) {}

  /*
    CRUD Methods for consuming RESTful API
  */

  // Note: This particular API does not like the client (us) setting the Content-Type
  // but note that for many JSON endpoints, you will need to use this header.
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // GET
  getCoffees(): Observable<Coffee[]> {
    return this.http
      .get<Coffee[]>(this.apiURL)
      .pipe(
        timeout(2),
        retry({
          count: environment.coffeeServiceRetryCount,
          delay: (err, attemptNum) => {
            console.error(`[CoffeeApiService] => Encountered an error while retrying request on attempt ${attemptNum}: `, err)
            return timer(1000 * attemptNum);
          }
        }),
        catchError(this.handleErrorWithTimeout)
      );
  }

  // GET by ID
  getCoffee(id: number): Observable<Coffee> {
    return this.http
      .get<Coffee>(this.apiURL + '/' + id)
      .pipe(catchError(this.handleError));
  }

  // POST
  createCoffee(coffee: Partial<Coffee>): Observable<Coffee> {
    return this.http
      .post<{success: boolean, added: Coffee }>(
        this.apiURL,
        JSON.stringify(coffee)
      )
      .pipe(map(res => res.added), catchError(this.handleError));
  }

  // PUT
  updateCoffee(coffee: Partial<Coffee>): Observable<Coffee> {
    return this.http
      .put<{ message: string, update: Coffee}>(
        this.apiURL + '/' + coffee.id,
        JSON.stringify(coffee)
      )
      .pipe(map(res => res.update), catchError(this.handleError));
  }

  // DELETE
  deleteCoffee(id: number) {
    return this.http
      .delete<Coffee>(this.apiURL + '/' + id, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  // Shared error handling
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.status === 0) {
      // Get client-side error
      errorMessage = error.error;
      console.error('[CoffeeApiService] => Client-side HTTP error occurred: ', errorMessage, error);
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error}`;
      console.error('[CoffeeApiService] => Server-side HTTP error occurred: ', errorMessage, error);
    }
    return throwError(() => {
      return errorMessage;
    });
  }

  private handleErrorWithTimeout(error: HttpErrorResponse | TimeoutError) {
    let errorMessage = '';
    if (error instanceof TimeoutError) {
      console.error('[CoffeeApiService] => Request timed out!', error);
      return throwError(() => {
        return errorMessage;
      });
    } else {
      return this.handleError(error);
    }
  }

}
