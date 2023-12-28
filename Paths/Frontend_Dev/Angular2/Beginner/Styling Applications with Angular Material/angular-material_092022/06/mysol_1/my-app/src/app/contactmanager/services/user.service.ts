import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _users: BehaviorSubject<User[]>;

  private dataStore: {
    users: User[];
  }

  constructor(private http: HttpClient) {
    this.dataStore = { users: [ ] };
    this._users = new BehaviorSubject<User[]>([]);
  }

  loadAll() {
    const usersUrl = 'https://angular-material-api.azurewebsites.net/users'

    return this.http.get<User[]>(usersUrl)
      .subscribe(data => {
        this.dataStore.users = data;
      }, error => {
        console.log("Failed to fetch users");
      });
  }

}
