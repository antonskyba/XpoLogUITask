import { Component } from '@angular/core';

import { ChartFormParams } from '../../types';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss'],
})
export class ColumnChartComponent {
  params: ChartFormParams = {
    startDate: null,
    endDate: null,
    maxMagnitude: null,
  };

  onChartParamsChange($event: ChartFormParams): void {
    this.params = { ...this.params, ...$event };
  }
}
