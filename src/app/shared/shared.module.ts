import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContainerComponent } from './page-container/page-container.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';




@NgModule({
  declarations: [PageContainerComponent],
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    PageContainerComponent,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule
  ]
})
export class SharedModule { }
