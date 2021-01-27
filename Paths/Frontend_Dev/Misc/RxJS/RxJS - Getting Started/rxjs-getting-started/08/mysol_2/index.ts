import { Observable, of, from, fromEvent, concat, interval, throwError, Subject,
				 asyncScheduler, asapScheduler, queueScheduler, merge } from 'rxjs';
import { mergeMap, map, filter, tap, catchError, take, takeUntil,
				 multicast, refCount, publish, share,
				 publishLast, publishBehavior, publishReplay } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';



console.log('Start script.');

let queue$ = of('QueueScheduler (synchronous)', queueScheduler);

let asap$ = of('AsapScheduler (async micro task)', asapScheduler);

let async$ = of('AsyncScheduler (async task)', asyncScheduler);



merge(async$, asap$, queue$)
	.subscribe(
		value => console.log(value)
	);


console.log('End script.');





