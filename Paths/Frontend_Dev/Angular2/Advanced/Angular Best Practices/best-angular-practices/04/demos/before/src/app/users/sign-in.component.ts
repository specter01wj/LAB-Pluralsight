import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { UserRepositoryService } from '../services/user-repository.service'

@Component({
  styles: [`
    form {
      color: #336699;
      font-size:24px;
      padding:30px;
      width: 310px;
      margin: 0 auto;
    }
    input {
      display: block;
      font-size: 24px;
      padding:10px;
      width: 275px;
    }
    button {
      font-size: 26px;
      padding: 8px;
      color: #556b8e;
      margin-left: 10px;
    }
    button:disabled {
      color: #999999;
    }
    .header {
      color: #336699;
      text-align:center;
      padding-top:20px;
      margin-top:0;
    }
    .form-group {
      margin: 10px;
    }
    .buttons {
      text-align: right;
      margin-right: 0px;
    }
    .save {
      background-color: #CCDDFF;
      border-color: #CCDDFF;
    }
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :ms-input-placeholder  { color: #999; }
  `],
  template: `
    <div>
      <h2 class="header">Sign In</h2>
      <form #signInForm="ngForm" (ngSubmit)="signIn(signInForm.value)" autocomplete="off" novalidate>
        <div class="form-group" [ngClass]="{ 'error' : email.invalid && email.dirty }">
          <label for="email">Email:</label>
          <em *ngIf="email.invalid && email.dirty">Required</em>
          <input [(ngModel)]="credentials.email" #email="ngModel" required name="email" id="email" type="text" placeholder="Email..." />
        </div>
        <div class="form-group" [ngClass]="{ 'error' : password.invalid && password.dirty }">
          <label for="password">Password:</label>
          <em *ngIf="password.invalid && password.dirty">Required</em>
          <input [(ngModel)]="credentials.password" #password="ngModel" required name="password" id="password" type="password" placeholder="Password..." />
        </div>
        <div class="form-group buttons" >
          <button type="button" (click)="cancel()">Cancel</button>
          <button class="save" type="submit" [disabled]="signInForm.invalid">Sign In</button>
        </div>
      </form>
    </div>
  `
})
export class SignInComponent {
  credentials: any = {};

  constructor(private router: Router, private userRepository: UserRepositoryService) { }

  signIn(credentials: any) {
    this.userRepository.signIn(credentials)
      .subscribe({
        error: (err) => { console.error(err, 'Error') },
        complete: () => this.router.navigate(['/catalog'])
      })
  }

  cancel() {
    this.router.navigate(['/'])
  }
}
