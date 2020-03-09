import { Observable } from 'rxjs';

let customObservable = Observable.create(subscriber => {

	if(newValue) {
		subscriber.next(newValue);
	}

	if(newError) {
		subscriber.error(newError);
	}

	if(done) {
		subscriber.complete();
	}
	
});





