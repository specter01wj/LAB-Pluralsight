import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { allBooks, allReaders } from 'app/data';
import { Reader } from "app/models/reader";
import { Book } from "app/models/book";
import { OldBook } from "app/models/oldBook";
import { BookTrackerError } from 'app/models/bookTrackerError';

@Injectable()
export class DataService {
  private url_books = 'assets/server/data/books.json';
  private url_booksId = 'assets/server/data/books.json/${id}';

  constructor(private http: HttpClient) { }

  mostPopularBook: Book = allBooks[0];

  setMostPopularBook(popularBook: Book): void {
    this.mostPopularBook = popularBook;
  }

  getAllReaders(): Reader[] {
    return allReaders;
  }

  getReaderById(id: number): Reader {
    return allReaders.find(reader => reader.readerID === id);
  }

  getAllBooks(): Observable<Book[]> {
    // return allBooks;
    console.log("getAllBooks Loaded!");
    console.log("getAllBooks Loaded!");
    return this.http.get<Book[]>(this.url_books);
  }

  getBookById(id: number): Observable<Book[]> {
    // return allBooks.find(book => book.bookID === id);
    let getHeaders: HttpHeaders = new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'my-token'
    });
    return this.http.get<Book[]>(this.url_books, {
      headers: getHeaders
    });
  }  

  getOldBookById(id: number): Observable<Book[]> {
    return this.http.get<Book[]>(this.url_books);
      /*.pipe(
        map(b => <OldBook[]>{
          bookTitle: b.title,
          year: b.publicationYear
        }),
        tap(classicBook => console.log(classicBook))
      );*/
  }

  addBook(newBook: Book): Observable<Book> {
    return this.http.post<Book>('api/books', newBook, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  updateBook(updatedBook: Book): Observable<void> {
    return this.http.post<void>(`api/books/${updatedBook.bookID}`, updatedBook, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteBook(bookID: number): Observable<void> {
    return this.http.delete<void>(`api/books/${bookID}`);
  }

  


}
