import { Observable, from } from 'rxjs';

let bookArray = [
	{ "bookID": 1, "title": "Goodnight Moon" },
	{ "bookID": 2, "title": "Winnie-the-Pooh" },
	{ "bookID": 3, "title": "Where the Wild Things Are" },
];

let booksObservable$ = from(bookArray);

let allBooks = [];

booksObservable$.subscribe(
	(data) => allBooks = data,
    (err) => console.log(err),
    () => console.log('All done getting books.')
);










