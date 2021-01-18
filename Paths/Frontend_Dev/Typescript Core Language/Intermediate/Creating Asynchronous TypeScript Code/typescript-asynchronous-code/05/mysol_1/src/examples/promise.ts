import { heroes } from './heroes';
import { Hero } from '../lib';

/**
 * Return a fulfilled promise after a given delay.
 */
// let delay: () => Promise<void>;
const delay: (ms: number) => Promise<void> = (ms: number) => 
	new Promise<void>(resolve => setTimeout(resolve, ms));

/**
 * Return a fulfilled promise of heroes
 */
const getHeroesDelayedAsync: () => Promise<Hero[]> = function() {
	return new Promise<Hero[]>(resolve => resolve(heroes));
};

/**
 * Return a fulfilled promise of empty array
 */
/*const getHeroesEmpty: () => Promise<Hero[]> = () =>
	new Promise<Hero[]>( resolve => resolve([]) );*/
const getHeroesEmpty: () => Promise<Hero[]> = () =>
	Promise.resolve([]);

/**
 * Get the heroes via a Promise
 */
// export let getHeroesViaPromise: () => Promise<Hero[]>;
export const getHeroesViaPromise: () => Promise<Hero[]> = function() {
	return delay(2000).then( () => getHeroesDelayedAsync() );
};

/**
 * Create and return a promise.
 * When invoked, it will settle
 * by either resolve or reject.
 */
export let getHeroesViaNewPromise: () => Promise<Hero[]> = function() {
	const newPromise = new Promise<Hero[]>( (resolve, reject) => {
		return delay(2000)
			.then( () => getHeroesDelayedAsync())
			.then( (heroes: Hero[]) => {
				if (heroes && heroes.length) {
          resolve(heroes);
        } else {
          reject(Error('Uh oh! Errors!'));
        }
			});
	});
	return newPromise; 
};

/**
 * Get the heroes,
 * except this always causes a Promise reject
 */
export let getHeroesViaPromiseReject: () => Promise<Hero[]> = function() {
	const newPromise = new Promise<Hero[]>( (resolve, reject) => {
		return delay(2000)
			.then( () => getHeroesEmpty())
			.then( (heroes: Hero[]) => {
				if (heroes && heroes.length) {
          resolve(heroes);
        } else {
          reject(Error('Uh oh! Errors!'));
        }
			});
	});
	return newPromise; 
};

/**
 * Get the heroes
 * Except this always causes a Promise to reject, too
 */
export let getHeroesViaPromiseRejectShorter: () => Promise<Hero[]> = function() {
	const getsHeroesOrDoesIt = () =>
    Promise.reject('bad error occurred getting the heroes');

  return delay(2000).then(() => getsHeroesOrDoesIt());
};
