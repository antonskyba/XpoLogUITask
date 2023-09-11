import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { map, first, tap } from 'rxjs/operators';
import * as Highcharts from 'highcharts';

import { EarthquakeService } from '../../../../services';
import { EarthquakeData, EarthquakeEvent } from '../../../../types';
import { PopupComponent } from '../popup/popup.component';
import { PopupService } from '../../services/popup.service';
import { EarthquakePopupComponent } from '../earthquake-popup/earthquake-popup.component';
import { PopupItem } from '../popup/popup-item';

@Component({
  selector: 'app-earthquake-chart',
  templateUrl: './earthquake-chart.component.html',
  styleUrls: ['./earthquake-chart.component.scss'],
})
export class EarthquakeChartComponent implements OnChanges, OnDestroy {
  @Input() chartType: 'column' | 'line' = 'column';

  @Input() events = 10;

  @Input() startDate: Date | null = null;

  @Input() endDate: Date | null = null;

  @Input() maxMagnitude: string | null = null;

  @Input() popover = false;

  @ViewChild('chart') chartEl!: ElementRef;

  @ViewChild(PopupComponent) popupEl!: PopupComponent;

  private earthquakeEvent: EarthquakeEvent | null = null;

  constructor(
    private earthquakeService: EarthquakeService,
    private popupService: PopupService
  ) {}

  ngOnChanges(): void {
    this.earthquakeService
      .getEarthquakeData(
        this.startDate,
        this.endDate,
        this.maxMagnitude,
        this.events
      )
      .pipe(
        first((data: EarthquakeData | undefined) => !!data),
        tap((data: EarthquakeData | undefined) => {
          if (data?.features) this.earthquakeEvent = data.features[0];
        }),
        map((data: EarthquakeData | undefined) =>
          (data?.features || []).map((event) => event.properties.mag)
        )
      )
      .subscribe((magnitudes: number[]) => this.constructCharts(magnitudes));
  }

  ngOnDestroy(): void {
    this.popupService.close();
  }

  onChartClick(): void {
    if (!this.popover || !this.earthquakeEvent) return;

    this.popupService.open(
      this.popupEl,
      new PopupItem(EarthquakePopupComponent, this.earthquakeEvent)
    );
  }

  private constructCharts(magnitudes: number[]): void {
    Highcharts.chart(this.chartEl?.nativeElement, <any>{
      chart: {
        type: this.chartType,
      },
      title: {
        text: 'Earthquake Magnitudes Over Time',
      },
      series: [
        {
          name: 'Magnitude',
          data: magnitudes,
        },
      ],
      tooltip: {
        enabled: false,
      },
    });
  }
}
