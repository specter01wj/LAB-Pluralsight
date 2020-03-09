import { Observable, fromEvent } from 'rxjs';

let okButton = document.getElementById('okButton');

let clickObservable$ = fromEvent(okButton, 'click');

let allBooks = [];

clickObservable$.subscribe(
	(data) => allBooks = data,
    (err) => console.log(err),
    () => console.log('All done getting books.')
);










