import { Component } from '@angular/core';

import { ChartFormParams } from '../../types';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent {
  params: ChartFormParams = {
    startDate: null,
    endDate: null,
  };

  onChartParamsChange($event: ChartFormParams): void {
    this.params = { ...this.params, ...$event };
  }
}
