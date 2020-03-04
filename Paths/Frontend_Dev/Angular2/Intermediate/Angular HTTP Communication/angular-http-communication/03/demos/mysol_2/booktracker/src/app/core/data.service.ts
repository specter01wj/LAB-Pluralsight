import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { allBooks, allReaders } from 'app/data';
import { Reader } from "app/models/reader";
import { Book } from "app/models/book";
import { BookTrackerError } from 'app/models/bookTrackerError';
import { OldBook } from 'app/models/oldBook';

@Injectable()
export class DataService {
  private url_allReaders = '/api/readers';
  // private url_allReaderById = `/api/readers/${id}`;

  constructor(private http: HttpClient) { }

  mostPopularBook: Book = allBooks[0];

  setMostPopularBook(popularBook: Book): void {
    this.mostPopularBook = popularBook;
  }

  /*getAllReaders(): Reader[] {
    return allReaders;
  }*/

  getAllReaders(): Observable<Reader[]> {
    return this.http.get<Reader[]>(this.url_allReaders);
  }

  /*getReaderById(id: number): Reader {
    return allReaders.find(reader => reader.readerID === id);
  }*/

  getReaderById(id: number): Observable<Reader> {
    let url_allReaderById = `/api/readers/${id}`;
    return this.http.get<Reader>(url_allReaderById);
  }

  addReader(newReader: Reader): Observable<Reader> {
    return this.http.post<Reader>(this.url_allReaders, newReader);
  }

  updateReader(updateReader: Reader): Observable<void> {
    let url_ReaderById = `/api/readers/${updateReader.readerID}`;
    return this.http.put<void>(url_ReaderById, updateReader);
  }

  deleteReader(readerID: number): Observable<void> {
    let url_delReaderById = `/api/readers/${readerID}`;
    return this.http.delete<void>(url_delReaderById);
  }

  getAllBooks(): Observable<Book[]> {
    console.log('Getting all books from the server.');
    return this.http.get<Book[]>('/api/books');
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`/api/books/${id}`, {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'my-token'
      })
    });
  }  

  getOldBookById(id: number): Observable<OldBook> {
    return this.http.get<Book>(`/api/books/${id}`)
      .pipe(
        map(b => <OldBook>{
          bookTitle: b.title,
          year: b.publicationYear
        }),
        tap(classicBook => console.log(classicBook))
      )
  }

  addBook(newBook: Book): Observable<Book> {
    return this.http.post<Book>('/api/books', newBook, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updateBook(updatedBook: Book): Observable<void> {
    return this.http.put<void>(`/api/books/${updatedBook.bookID}`, updatedBook, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteBook(bookID: number): Observable<void> {
    return this.http.delete<void>(`/api/books/${bookID}`);
  }
  
}
