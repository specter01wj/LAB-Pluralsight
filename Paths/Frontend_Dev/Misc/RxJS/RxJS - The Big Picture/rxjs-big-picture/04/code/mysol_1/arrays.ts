import { Observable, from } from 'rxjs';

let bookArray = [
	{ "bookID": 1, "title": "Goodnight Moon" },
	{ "bookID": 2, "title": "Winnie-the-Pooh" },
	{ "bookID": 3, "title": "Where the Wild Things Are" },
];

let booksObservable$ = from(bookArray);

let allBooks = [];

let element1 = document.getElementById('t1');

booksObservable$.subscribe(
	(data) => {
		allBooks = data;









		
		element1.innerHTML = allBooks[0];
	},
    (err) => console.log(err),
    () => console.log('All done getting books.')
);










