import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from 'app/models/book';
import { DataService } from 'app/services/data.service';
import { LoggerService } from 'app/services/logger.service';
import { BadgeService } from 'app/services/badge.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styles: [],
  providers: [BadgeService]
  // providers: [DataService]
})
export class EditBookComponent implements OnInit {

  selectedBook: Book;
  currentBadge: string;

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private loggerService: LoggerService,
              private badgeService: BadgeService) { }

  ngOnInit() {
    let bookID: number = parseInt(this.route.snapshot.params['id']);
    this.selectedBook = this.dataService.getBookById(bookID);
  }

  setMostPopular(): void {
    this.dataService.setMostPopularBook(this.selectedBook);
    this.loggerService.log(`New most popular book: ${this.selectedBook.title}`);
    this.currentBadge = this.badgeService.getReaderBadge(this.selectedBook.totalMinutesRead);
  }

  saveChanges(): void {
    console.warn('Save changes to book not yet implemented.');
  }
}
