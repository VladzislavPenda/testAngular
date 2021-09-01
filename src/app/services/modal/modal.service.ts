import { ComponentFactoryResolver, ComponentRef, Injectable, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { WinModalComponent } from 'src/app/game/win-modal/win-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService implements OnDestroy, OnInit {

  // public viewContainerRef!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }


  ngOnInit(){
    console.log("modal service init.");
  }

  public loadComponent(winnerName: string, viewContainerRef: ViewContainerRef) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(WinModalComponent);
    // const viewContainerRef = viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = winnerName;
    componentRef.changeDetectorRef.detectChanges();
    componentRef.instance.closeModal.subscribe(() => this.removeDynamicComponent(componentRef));
  }

  removeDynamicComponent(component: ComponentRef<WinModalComponent>) {
    component.destroy();
  }

  ngOnDestroy() {
    console.log("%c modalService destroyed.", "color: pink");
  }
}
