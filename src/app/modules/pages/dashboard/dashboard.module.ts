import { SharedModule } from './../../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HIGHCHARTS_MODULES } from 'angular-highcharts';

import highmaps from 'highcharts/modules/map.src';
import more from 'highcharts/highcharts-more.src';
import { HighchartComponent } from 'src/app/chart/highchart/highchart.component';

export function highchartsModules() {
  return [more, highmaps];
}
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent,
    HighchartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),


  ],
  providers: [{ provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }],
})

export class DashboardModule { }
