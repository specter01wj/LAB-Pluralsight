import { Observable } from 'rxjs';
import { allBooks } from './data';


function subscribe(subscriber) {

	for(let book of allBooks) {
		subscriber.next(book);
	}

}


let allBooksObervable$ = new Observable(subscribe);


let observer = {
	next: (value) => console.log(value.title),
	error: (error) => console.log(`ERROR: ${error}`),
	complete: () => console.log(`All done!`)
};



allBooksObervable$.subscribe(observer);

