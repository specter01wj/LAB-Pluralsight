import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';

import { Reader } from 'app/models/reader';
import { allReaders, allBooks } from 'app/data';
import { Book } from 'app/models/book';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
}
