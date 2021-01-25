import { Observable, of, from, fromEvent, concat, interval } from 'rxjs';
import { mergeMap, map, filter, tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';



ajax('/api/books')
	.pipe(
		mergeMap(ajaxRes => ajaxRes.response)
	)
	.subscribe(
		finalValue => console.log(finalValue)
	);














