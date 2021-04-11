import { CdkPortal, ComponentPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import { Component, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { ComponentPortalDemoComponent } from '../component-portal-demo/component-portal-demo.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @ViewChildren(CdkPortal) templatePortalList: QueryList<CdkPortal>;

  @ViewChild('demoTemplate') demoTemplate: TemplateRef<any>;
  
  currentPortal: Portal<any>;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  changePortal1(){
    this.currentPortal = this.templatePortalList.first;
  }

  changePortal2(){
    this.currentPortal = this.templatePortalList.last;
  }

  changePortal3(){
    this.currentPortal = new TemplatePortal(this.demoTemplate, this.viewContainerRef);
  }

  changePortal4(){
    this.currentPortal = new ComponentPortal(ComponentPortalDemoComponent);
  }
}
