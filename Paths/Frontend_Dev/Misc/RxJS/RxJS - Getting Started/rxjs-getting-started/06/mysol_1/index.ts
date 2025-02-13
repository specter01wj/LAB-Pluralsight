import { Observable, of, from, fromEvent, concat, interval, throwError } from 'rxjs';
import { mergeMap, map, filter, tap, catchError, take, takeUntil } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { allBooks, allReaders } from './data';



function grabAndLogClassics(year, log) {
  return source$ => {
    return new Observable(subscriber => {
      return source$.subscribe(
        book => {
          if(book.publicationYear < year) {
            subscriber.next(book);
            if(log) {
              console.log(`Classic: ${book.title}`);
            }
          }
        },
        err => subscriber.error(err),
        () => subscriber.complete()
      );
    });
  }
}



function grabClassics(year) {
  return filter(book => book.publicationYear < year);
}


function grabAndLogClassicsWithPipe(year, log) {
  return source$ => source$.pipe(
    filter(book => book.publicationYear < year),
    tap(classicBook => log ? console.log(`Title: ${classicBook.title}`) : null)
  );
}


ajax('/api/books')
  .pipe(
    mergeMap(ajaxRes => ajaxRes.response),
    // filter(book => book.publicationYear < 1950),
    // tap(oldBook => console.log(`Title: ${oldBook.title}`)),
    // grabAndLogClassics(1940, false)
    // grabClassics(1950)
    grabAndLogClassicsWithPipe(1950, true)
  )
  .subscribe(
    finalValue => console.log(`VALUE: ${finalValue.title}`),
    error => console.log(`ERROR: ${error}`)
  );






