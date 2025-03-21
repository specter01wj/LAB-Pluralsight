import { Component, OnInit } from '@angular/core';

import { Book } from "app/models/book";
// import { allBooks, allReaders } from 'app/api/data';
import { Reader } from "app/models/reader";
import { LoggerService } from 'app/services/logger.service';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  allBooks: Book[] = [];
  allReaders: Reader[] = [];
  mostPopularBook: Book;

  constructor(private loggerService: LoggerService,
              private dataService: DataService) {}

  ngOnInit() {
    // this.loggerService.log('Create the dashboard.');
    this.allBooks = this.dataService.getAllBooks();
    this.allReaders = this.dataService.getAllReaders();
    this.mostPopularBook = this.dataService.mostPopularBook;
  }

  deleteBook(bookID: number): void {
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
