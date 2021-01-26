import { Observable, of, from, fromEvent, concat, interval, throwError, Subject } from 'rxjs';
import { mergeMap, map, filter, tap, catchError, take, takeUntil } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';



let subject$ = new Subject();


subject$.subscribe(
  value => console.log(`Observer 1: ${value}`),
);

subject$.subscribe(
  value => console.log(`Observer 1: ${value}`),
);


subject$.next('Hello!');



