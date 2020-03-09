import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

let httpObservable$ = ajax.getJSON('/api/books');

let allBooks = [];

httpObservable$.subscribe(
	(data) => allBooks = data,
    (err) => console.log(err),
    () => console.log('All done getting books.')
);










