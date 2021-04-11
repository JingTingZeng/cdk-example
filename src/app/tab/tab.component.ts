import { CdkPortal, ComponentPortal, DomPortal, Portal, PortalInjector, TemplatePortal } from '@angular/cdk/portal';
import { Component, InjectionToken, Injector, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { ComponentPortalDemoComponent } from '../component-portal-demo/component-portal-demo.component';

export const EXAMPLE_DATA= new InjectionToken<any>('example-data');

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @ViewChildren(CdkPortal) templatePortalList: QueryList<CdkPortal>;

  @ViewChild('demoTemplate') demoTemplate: TemplateRef<any>;
  
  currentPortal: Portal<any>;

  name = '外部資訊內容';

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  changePortal1(){
    this.currentPortal = this.templatePortalList.first;
    this.templatePortalList.first.context = {data: this.name};
  }

  changePortal2(){
    this.currentPortal = this.templatePortalList.last;
    this.templatePortalList.last.context = {data: this.name};
  }

  changePortal3(){
    this.currentPortal = new TemplatePortal(this.demoTemplate, this.viewContainerRef, {data: this.name});
  }

  changePortal4(){
    const newInjector = this.createInjector(this.name);
    this.currentPortal = new ComponentPortal(ComponentPortalDemoComponent, undefined, newInjector);
  }

  private createInjector(data): Injector{
    return Injector.create({
      providers:[
        {provide: EXAMPLE_DATA, useValue: data}
      ]
    })
  }

}
