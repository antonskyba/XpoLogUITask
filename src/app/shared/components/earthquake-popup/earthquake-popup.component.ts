import { Component, Input } from '@angular/core';

import { PopupContentComponent } from '../popup/popup-content.component';
import { EarthquakeEvent } from '../../../../types';

@Component({
  selector: 'app-earthquake-popup',
  templateUrl: './earthquake-popup.component.html',
})
export class EarthquakePopupComponent implements PopupContentComponent {
  @Input() data: EarthquakeEvent | null = null;
}
