import {
  AfterViewInit,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  NgZone,
  OnInit,
  Renderer,
  ReflectiveInjector,
  ViewContainerRef,
  ViewChild
} from '@angular/core';

@Directive({
  selector: 'ion-nav'
})
export class NavDirective implements OnInit {

  constructor(private elementRef: ElementRef, private crf: ComponentFactoryResolver, private viewPort: ViewContainerRef) {
  }


  ngOnInit() {
    // this.elementRef.nativeElement.waitForExternal = true;
    const controller = document.querySelector('ion-nav-controller');
    (controller as any).delegate = this;
  }

  attachViewToDom(nav: any, enteringView: any): Promise<any> {
    return new Promise((resolve) => {
      const componentProviders = ReflectiveInjector.resolve([]); // TODO, types
      const componentFactory = this.crf.resolveComponentFactory(enteringView.component);

      const hostElement = document.createElement('ion-page');
      this.elementRef.nativeElement.appendChild(hostElement);

      const childInjector = ReflectiveInjector.fromResolvedProviders(componentProviders, this.viewPort.parentInjector);

      const componentRef = componentFactory.create(childInjector, [], hostElement);

      enteringView.componentFactory = componentFactory;
      enteringView.childInjector = childInjector;
      enteringView.componentRef = componentRef;
      enteringView.instance = componentRef.instance;
      enteringView.element = hostElement;
      requestAnimationFrame(() => {
        console.log('Bam!');
        componentRef.changeDetectorRef.detectChanges();
      });
      resolve();
    });
  }

  removeViewFromDom(navController: any, viewController: any): Promise<any> {
    if (viewController.componentRef) {
      viewController.componentRef.destroy();
    }
    navController.element.removeChild(viewController.element);
    return Promise.resolve();
  }

}
