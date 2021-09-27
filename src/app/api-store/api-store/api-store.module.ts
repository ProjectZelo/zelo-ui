import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';



@NgModule({
  declarations: [],
  imports: [

  ]
})
export class ApiStoreModule {
  static forRoot() {
    return {
      NgModule: ApiStoreModule,
      providers: [
        ApiService
      ]
    }
  }
 }
