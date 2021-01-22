import { Observable, from } from 'rxjs';

let nums = [2, 4, 6, 8, 10];

let nums2 = [3, 5, 7, 9, 11];

let numsObervable$ = from(nums);


let evenNumbers$ = Observable.create(subscriber => {

	for(let currentNum of nums2) {
		if(currentNum % 2 !== 0) {
			subscriber.next(currentNum);
		} else {
			subscriber.error('Value is not odd.');
		}
	}

	subscriber.complete();

});


let observer = {
	next: (value) => console.log(value),
	error: (error) => console.log(`ERROR: ${error}`),
	complete: () => console.log(`All done!`)
};


numsObervable$.subscribe(observer);


evenNumbers$.subscribe(observer);



