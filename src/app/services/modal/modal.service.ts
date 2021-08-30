import { componentFactoryName } from '@angular/compiler';
import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { WinModalComponent } from 'src/app/game/win-modal/win-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public viewContainerRef!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  public loadComponent(winnerName: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(WinModalComponent);
    const viewContainerRef = this.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = winnerName;
    componentRef.changeDetectorRef.detectChanges();
    componentRef.instance.closeModal.subscribe(() => this.removeDynamicComponent(componentRef));
  }

  removeDynamicComponent(component: any) {
    component.destroy();
}
}
