import { Type } from '@angular/core';

import { PopupContentComponent } from './popup-content.component';

export class PopupItem {
  constructor(
    public component: Type<PopupContentComponent>,
    public data: any
  ) {}
}
