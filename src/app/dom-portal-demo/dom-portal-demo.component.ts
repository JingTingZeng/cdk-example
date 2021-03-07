import { CdkPortal, DomPortal, DomPortalOutlet } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ApplicationRef, Component, ComponentFactoryResolver, Inject, Injector, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dom-portal-demo',
  templateUrl: './dom-portal-demo.component.html',
  styleUrls: ['./dom-portal-demo.component.scss']
})
export class DomPortalDemoComponent implements OnInit {

  @ViewChild(CdkPortal) demo: CdkPortal;

  domPortalOutLet: DomPortalOutlet;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private viewContainerRef: ViewContainerRef,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef
  ) { }

  ngOnInit(): void {
  }

  create(){
    this.createOutletOutOfApp();
    this.attachTemplate();
  }

  createOutletOutOfApp(){
    const element = this.document.createElement('div');
    element.innerHTML = "<p>我在app-root之外</p>";
    this.document.body.appendChild(element);
    this.domPortalOutLet = new DomPortalOutlet(element, this.componentFactoryResolver,this.appRef,this.injector);
  }

  attachTemplate(){
    this.domPortalOutLet.attach(this.demo);
  }

}
