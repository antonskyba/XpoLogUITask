import { Component, EventEmitter, Output, Input } from '@angular/core';

import { ChartFormParams } from '../../../../types';

@Component({
  selector: 'app-chart-form',
  templateUrl: './chart-form.component.html',
})
export class ChartFormComponent {
  @Input() magnitude = false;

  params: ChartFormParams = this.getInitialFormParams();

  @Output() readonly chartParamsChange: EventEmitter<ChartFormParams> =
    new EventEmitter<ChartFormParams>();

  onSubmit(): void {
    this.chartParamsChange.emit(this.params);
  }

  onResetClick(): void {
    this.chartParamsChange.emit((this.params = this.getInitialFormParams()));
  }

  private getInitialFormParams(): ChartFormParams {
    const obj: ChartFormParams = {
      startDate: null,
      endDate: null,
    };
    if (this.magnitude) obj.maxMagnitude = null;
    return obj;
  }
}
