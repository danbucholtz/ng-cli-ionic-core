
import { Component, ElementRef } from '@angular/core';
import { PageThreeComponent } from './page-three';

@Component({
  selector: `app-page-two`,
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Page Two</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>
    Page Two
    <ion-button (click)="goToNext()">Go to Page Three</ion-button>
    <ion-button (click)="goBack()">Go Back</ion-button>
  </ion-content>
  `
})
export class PageTwoComponent {

  constructor(private elementRef: ElementRef) {
  }

  goToNext() {
    const nav = this.elementRef.nativeElement.closest('ion-nav') as any;
    nav.push(PageThreeComponent);
  }

  goBack() {
    const nav = this.elementRef.nativeElement.closest('ion-nav') as any;
    nav.pop();
  }
}
