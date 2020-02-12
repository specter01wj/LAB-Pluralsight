// import { Injectable } from '@angular/core';

// declare let toastr:any;

import { InjectionToken } from '@angular/core'

export let TOASTR_TOKEN = new InjectionToken<ToastrService>('toastr');

/*@Injectable({
  providedIn: 'root'
})*/
// export class ToastrService {
export interface ToastrService {

  // constructor() { }

  /*success(message: string, title?: string) {
    toastr.success(message, title);
  }
  info(message: string, title?: string) {
    toastr.info(message, title);
  }
  warning(message: string, title?: string) {
    toastr.warning(message, title);
  }
  error(message: string, title?: string) {
    toastr.error(message, title);
  }*/

  success (msg: string, title?: string): void;

  info (msg: string, title?: string): void;

  warining (msg: string, title?: string): void;
  
  error (msg: string, title?: string): void;

}
