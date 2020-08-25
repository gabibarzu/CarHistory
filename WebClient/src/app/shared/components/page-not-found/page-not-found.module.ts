import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from '../page-not-found';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent],
  imports: [
    CommonModule,
    IconModule
  ]
})
export class PageNotFoundModule { }
