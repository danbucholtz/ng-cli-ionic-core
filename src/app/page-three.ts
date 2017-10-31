
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: `app-page-three`,
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Page Three</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>
    Page Three
    <ion-button (click)="goBack()">Go Back</ion-button>
  </ion-content>
  `
})
export class PageThreeComponent {

  constructor(private elementRef: ElementRef) {
  }

  goBack() {
    const nav = this.elementRef.nativeElement.closest('ion-nav') as any;
    nav.pop();
  }
}
