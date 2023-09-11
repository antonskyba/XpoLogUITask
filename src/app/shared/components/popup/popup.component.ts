import { Component, ViewChild } from '@angular/core';

import { PopupHostDirective } from './popup-host.directive';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  @ViewChild(PopupHostDirective, { static: true })
  host!: PopupHostDirective;

  readonly opened$ = this.popupService.toggleOpen$;

  constructor(private popupService: PopupService) {}

  close(): void {
    this.popupService.close();
  }
}
