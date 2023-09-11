import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { EarthquakeChartComponent } from './components/earthquake-chart/earthquake-chart.component';
import { ChartFormComponent } from './components/chart-form/chart-form.component';
import { PopupComponent } from './components/popup/popup.component';
import { PopupHostDirective } from './components/popup/popup-host.directive';
import { EarthquakePopupComponent } from './components/earthquake-popup/earthquake-popup.component';
import { PopupService } from './services/popup.service';

@NgModule({
  declarations: [
    EarthquakeChartComponent,
    ChartFormComponent,
    PopupComponent,
    PopupHostDirective,
    EarthquakePopupComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [PopupService],
  exports: [
    EarthquakeChartComponent,
    EarthquakePopupComponent,
    ChartFormComponent,
    PopupComponent,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
  ],
})
export class SharedModule {}
