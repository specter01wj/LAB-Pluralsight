import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { allBooks, allReaders } from 'app/data';
import { Reader } from "app/models/reader";
import { Book } from "app/models/book";
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
}
