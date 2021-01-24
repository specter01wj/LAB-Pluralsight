import { Observable } from 'rxjs';
import { allBooks } from './data';


function subscribe(subscriber) {

	for(let book of allBooks) {
		subscriber.next(book);
	}



}





let allBooksObervable$ = new Observable(subscribe);











