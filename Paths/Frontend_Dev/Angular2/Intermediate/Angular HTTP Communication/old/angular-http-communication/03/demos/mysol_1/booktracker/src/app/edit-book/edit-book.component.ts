import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from 'app/models/book';
import { OldBook } from 'app/models/oldBook';
import { DataService } from 'app/core/data.service';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styles: []
})
export class EditBookComponent implements OnInit {

  selectedBook: Book;

  constructor(private route: ActivatedRoute,
              private dataService: DataService) { }

  ngOnInit() {
    let bookID: number = parseInt(this.route.snapshot.params['id']);
    // this.selectedBook = this.dataService.getBookById(bookID);
    this.dataService.getBookById(bookID)
      .subscribe(
        (data: Book[]) => {
          this.selectedBook = data.find( item => {
            return item.bookID === bookID;
          });
        },
        (err: any) => console.log(err),
        () => console.log('Edit completed.')
      );

    this.dataService.getOldBookById(bookID)
      .subscribe(
        /*(data: OldBook[]) => {
          console.log(`Old book title: ${data.bookTitle}`);
        },*/(data: Book[]) => {
          let thisBook = data.find( item => {
            return item.bookID === bookID;
          });
          console.log(`Old book title: ${thisBook.title}`);
        },
        (err: any) => console.log(err),
        () => console.log('Edit Load Old Books completed.')
      );
  }

  setMostPopular(): void {
    this.dataService.setMostPopularBook(this.selectedBook);
  }

  saveChanges(): void {
    // console.warn('Save changes to book not yet implemented.');
    this.dataService.updateBook(this.selectedBook)
      .subscribe(
        (data: void) => {
          console.log(`${this.selectedBook.title} updated successfully.`);
        },
        (err: any) => {
          console.log(err);
        }
      );
  }
}
