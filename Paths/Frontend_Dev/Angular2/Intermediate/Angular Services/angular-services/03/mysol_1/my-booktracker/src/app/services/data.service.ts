import { Injectable } from '@angular/core';
import { allBooks, allReaders } from 'app/api/data';
import { Book } from 'app/models/book';
import { Reader } from 'app/models/reader';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
}
