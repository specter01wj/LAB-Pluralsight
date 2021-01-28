import { TestScheduler } from 'rxjs/testing';
import { delay, take } from 'rxjs/operators';
import { expect } from 'chai';

describe('RxBookTracker Tests', () => {

	let scheduler;

	beforeEach(() => {
		scheduler = new TestScheduler((actual, expected) => {
			expect(actual).deep.equal(expected);
		});
	});

	it('produces a single value and completion message', () => {
		scheduler.run(helpers => {
			const source$ = helpers.cold('a|');
			const expected = 'a|';

			helpers.expectObservable(source$).toBe(expected);
		});
	});
	
	it('should delay the values produced', () => {
		scheduler.run(helpers => {
			const source$ = helpers.cold('-a-b-c-d|');
			const expected = '------a-b-c-d|';

			helpers.expectObservable(source$.pipe(
				delay(5)
			)).toBe(expected);
		});
	});



});














