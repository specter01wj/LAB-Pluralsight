import axios, { AxiosResponse, AxiosError } from 'axios';

import { Order, Hero, AccountRepresentative } from '../interfaces';
import { apiUrl, parseList } from './config';

/**
 * Get the hero and his/her related orders and account rep
 * using promises
 */
const getHeroTreePromise = function(searchEmail: string) {
  // TODO
};

/**
 * Get the hero
 */
const getHeroPromise = (email: string) => {
  // TODO
  return axios
    .get<Hero[]>(`${apiUrl}/heroes?email=${email}`)
    .then((response: AxiosResponse<Hero[]>) => {
      const data = parseList<Hero>(response);
      const hero = data[0];
      return hero;
    })
    .catch((error: AxiosError) => handleAxiosErrors(error, 'Hero'));
};

/**
 * Get the hero's orders
 */
const getOrdersPromise = function(heroId: number) {
  // TODO
  return axios
    .get<Order[]>(`${apiUrl}/orders/${heroId}`)
    .then((response: AxiosResponse<Order[]>) => parseList<Order>(response))
    .catch((error: AxiosError) => handleAxiosErrors(error, 'Orders'));
};

/**
 * Get the hero's account rep
 */
const getAccountRepPromise = function(heroId: number) {
  // TODO
  return axios
    .get<AccountRepresentative>(`${apiUrl}/accountreps/${heroId}`)
    .then((response: AxiosResponse<AccountRepresentative>) => {
      const data = parseList<AccountRepresentative>(response);
      return data[0];
    })
    .catch((error: AxiosError) => handleAxiosErrors(error, 'Account Reps'));
};

function handleAxiosErrors(error: AxiosError, model: string) {
  console.error(`Developer Error: Async Data Error: ${error.message}`);
  return Promise.reject(`Oh no! We're unable to fetch the ${model}`);
}

export { getHeroTreePromise };
