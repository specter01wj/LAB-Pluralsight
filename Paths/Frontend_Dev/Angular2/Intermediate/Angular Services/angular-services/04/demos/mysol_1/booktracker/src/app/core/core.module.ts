import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggerService } from './logger.service';
import { DataService } from './data.service';
import { PlainLoggerService } from './plain-logger.service';
import { dataServiceFactory } from './data.service.factory';
// import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    LoggerService, DataService
  ]  
})
export class CoreModule { 

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

}
