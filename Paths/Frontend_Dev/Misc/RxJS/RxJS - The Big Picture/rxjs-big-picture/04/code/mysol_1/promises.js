import { Observable, from } from 'rxjs';

let booksPromise = getBookByIdAsync(5);

let booksObservable$ = from(booksPromise);

let allBooks = [];

booksObservable$.subscribe(
	(data) => allBooks = data,
    (err) => console.log(err),
    () => console.log('All done getting books.')
);










