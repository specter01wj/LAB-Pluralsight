import { Observable } from 'rxjs';
import { allBooks } from './data';


function subscribe(subscriber) {

	for(let book of allBooks) {
		subscriber.next(book);
	}

	if(document.title !== 'RxBookTracker') {
		subscriber.error('Incorrect page title.');
	}

	setTimeout(() => {
		subscriber.complete();
	}, 2000);

	return () => console.log('Executing teardown code.');

}


let allBooksObervable$ = new Observable(subscribe);
// let allBooksObervable$ = Observable.create(subscribe);


let observer = {
	next: (value) => console.log(value.title),
	error: (error) => console.log(`ERROR: ${error}`),
	complete: () => console.log(`All done!`)
};



allBooksObervable$.subscribe(observer);

