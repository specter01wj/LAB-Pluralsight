import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from 'app/models/book';
import { DataService } from 'app/core/data.service';

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
    this.dataService.getBookById(bookID)
      .subscribe({
        next: (res: Book) => {
          this.selectedBook = res;
        },
        error: (err: any) => { console.log(err) },
        complete: () => { console.log('All done.') }
      });
  }

  setMostPopular(): void {
    this.dataService.setMostPopularBook(this.selectedBook);
  }

  saveChanges(): void {
    console.warn('Save changes to book not yet implemented.');
  }
}
