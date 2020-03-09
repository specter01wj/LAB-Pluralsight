import { Observable } from 'rxjs';

let customObservable = Observable.create(subscriber => {

	if(newValue) {
		subscriber.next(newValue);
	}

	if(newError) {
		subscriber.next(newValue);
	}

	if(done) {
		subscriber.next(newValue);
	}



});





