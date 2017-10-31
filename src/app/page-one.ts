
import { Component, ElementRef } from '@angular/core';
import { PageTwoComponent } from './page-two';

@Component({
  selector: `app-page-one`,
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Page One</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content>
    Page One - Here's a random string {{time}}
    <ion-button (click)="goToNext()">Go to Page Two</ion-button>
  </ion-content>
  `
})
export class PageOneComponent {

  constructor(private elementRef: ElementRef) {
  }

  time: number = -1;

  ionViewWillEnter() {
    console.log('ionViewWillEnter Page One');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave Page One');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave Page One');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter Page One');
    setInterval(() => {
      console.log('Page One Tick');
      this.time = Math.random() * 1000;
    }, 1000);
  }

  goToNext() {
    const nav = this.elementRef.nativeElement.closest('ion-nav') as any;
    nav.push(PageTwoComponent);
  }
}
