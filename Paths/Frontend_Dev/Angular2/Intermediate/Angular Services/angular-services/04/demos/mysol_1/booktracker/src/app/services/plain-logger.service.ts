import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';

/*@Injectable({
  providedIn: 'root'
})*/
@Injectable()
export class PlainLoggerService implements LoggerService {

  constructor() { }
}
