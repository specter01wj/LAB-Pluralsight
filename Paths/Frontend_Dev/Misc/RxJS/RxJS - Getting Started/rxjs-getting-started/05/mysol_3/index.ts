import { Observable, of, from, fromEvent, concat, interval } from 'rxjs';
import { mergeMap, map, filter, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';



ajax('/api/books')
	.pipe(
		mergeMap(ajaxRes => ajaxRes.response),
		filter(book => book.publicationYear < 1950),
		tap(oldBook => console.log(`Title: ${oldBook.title}`))
	)
	.subscribe(
		finalValue => console.log(`VALUE: ${finalValue.title}`),
		error => console.log(`ERROR: ${error}`)
	);














