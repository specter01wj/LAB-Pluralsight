import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star/star.component';
import { ConvertToSpacesPipe } from '../service/convert-to-spaces.pipe';

@NgModule({
  declarations: [
  	StarComponent,
  	ConvertToSpacesPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
  	StarComponent,
  	ConvertToSpacesPipe
  ]
})
export class SharedModule { }
