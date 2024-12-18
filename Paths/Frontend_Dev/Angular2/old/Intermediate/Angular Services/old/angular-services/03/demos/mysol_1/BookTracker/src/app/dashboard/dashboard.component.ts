import { Component, OnInit } from '@angular/core';

import { LoggerService } from 'app/services/logger.service';
import { DataService } from 'app/services/data.service';

import { Book } from "app/models/book";
import { Reader } from "app/models/reader";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;

  constructor(
    private loggerService: LoggerService,
    private dataService: DataService) { 
    // this.loggerService.log('Creating the dashboard.');
  }

  ngOnInit() {
    this.allBooks = this.dataService.getAllBooks();
    this.allReaders = this.dataService.getAllReaders();
    // this.mostPopularBook = this.dataService.mostPopularBook;
    // this.mostPopularBook = this.allBooks[0];
    this.mostPopularBook = this.dataService.mostPopularBook;
  }

  deleteBook(bookID: number): void {
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
