import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './page-container/page-container.component';



@NgModule({
  declarations: [PageContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PageContainerComponent
  ]
})
export class SharedModule { }
