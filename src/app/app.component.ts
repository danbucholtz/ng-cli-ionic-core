import { Component } from '@angular/core';

import { PageOneComponent } from './page-one';

@Component({
  selector: 'app-root',
  template: `
  <ion-app>
    <ion-nav-controller></ion-nav-controller>
    <ion-nav [root]="root"></ion-nav>
  </ion-app>
  `
})
export class AppComponent {
  title = 'app';

  root: any = PageOneComponent;
}
