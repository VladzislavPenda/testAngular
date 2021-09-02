import { ComponentFactoryResolver, ComponentRef, Injectable, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { WinModalComponent } from 'src/app/game/win-modal/win-modal.component';

@Injectable()
export class ModalService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public loadComponent(winnerName: string, viewContainerRef: ViewContainerRef) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(WinModalComponent);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = winnerName;
    componentRef.changeDetectorRef.detectChanges();
    componentRef.instance.closeModal.subscribe(() => this.removeDynamicComponent(componentRef));
  }

  removeDynamicComponent(component: ComponentRef<WinModalComponent>) {
    component.destroy();
  }
}
