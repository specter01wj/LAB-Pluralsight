import { Observable, from } from 'rxjs';

let nums = [2, 4, 6, 8, 10];

let numsObervable$ = from(nums);

let observer = {
	next: (value) => console.log(value),
	error: (error) => console.log(`ERROR: ${error}`),
	complete: () => console.log(`All done!`)
};


numsObervable$.subscribe(observer);






