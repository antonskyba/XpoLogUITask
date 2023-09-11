import { Injectable, ViewContainerRef, ComponentRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { PopupComponent } from '../components/popup/popup.component';
import { PopupItem } from '../components/popup/popup-item';
import { PopupContentComponent } from '../components/popup/popup-content.component';

@Injectable()
export class PopupService {
  readonly toggleOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  private viewContainerRef: ViewContainerRef | null = null;

  private componentRef: ComponentRef<PopupContentComponent> | null = null;

  open(popupComponent: PopupComponent, popupItem: PopupItem): void {
    this.viewContainerRef = popupComponent.host.viewContainerRef;
    this.viewContainerRef.clear();

    this.componentRef =
      this.viewContainerRef.createComponent<PopupContentComponent>(
        popupItem.component
      );
    this.componentRef.instance.data = popupItem.data;

    this.toggleOpen$.next(true);
  }

  close(): void {
    this.viewContainerRef?.clear();
    this.componentRef?.destroy();
    this.componentRef = null;

    this.toggleOpen$.next(false);
  }
}
