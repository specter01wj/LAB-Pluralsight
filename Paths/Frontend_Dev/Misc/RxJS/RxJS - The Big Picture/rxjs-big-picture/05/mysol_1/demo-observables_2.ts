import { Observable, from } from 'rxjs';

let nums = [2, 4, 6, 8, 10];

let numsObservable$ = from(nums);

numsObservable$.subscribe(
	(value) => console.log(value),
	(err) => console.log(`ERROR: ${err}`),
	() => console.log('All done.')
);






