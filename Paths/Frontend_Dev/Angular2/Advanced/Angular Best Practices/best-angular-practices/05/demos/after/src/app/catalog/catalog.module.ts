import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CatalogComponent } from './catalog.component';
import { CatalogRepositoryService } from './catalog-repository.service'
import { SharedModule } from '../shared/shared.module'
import { FilterClassesService } from './filter-classes.service';


@NgModule({
  imports: [RouterModule, SharedModule],
  declarations: [CatalogComponent],
  exports: [],
  providers: [CatalogRepositoryService, FilterClassesService]
})
export class CatalogModule { };
