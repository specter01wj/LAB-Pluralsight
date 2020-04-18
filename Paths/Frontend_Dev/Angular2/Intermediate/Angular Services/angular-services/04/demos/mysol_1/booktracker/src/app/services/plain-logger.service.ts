import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';

/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class PlainLoggerService implements LoggerService {

  constructor() { }

  log(message: string): void {
    console.log(message);
  }

  error(message: string): void {
    console.error(message);
  }

}
