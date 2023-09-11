import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ColumnChartComponent } from './column-chart/column-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';

const routes: Routes = [
  { path: '', redirectTo: 'line', pathMatch: 'full' },
  { path: 'line', component: LineChartComponent },
  { path: 'column', component: ColumnChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
