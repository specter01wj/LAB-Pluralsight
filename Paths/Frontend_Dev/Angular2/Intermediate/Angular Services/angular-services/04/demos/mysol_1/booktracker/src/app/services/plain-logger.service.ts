import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';

/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class PlainLoggerService implements LoggerService {

  constructor() { }

  log(message: string): void {
    const timeString: String = new Date().toLocaleTimeString();
    console.log(`${message} (${timeString})`);
  }

  error(message: string): void {
    console.error(`ERROR: ${message}`);
  }
  
}
