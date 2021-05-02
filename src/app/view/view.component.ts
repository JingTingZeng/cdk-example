import { Component, ComponentFactoryResolver, Injector, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ColorComponent } from '../color/color.component';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  @ViewChild('tpl', {static: true}) tpl: TemplateRef<any>;
  @ViewChild('vc', {read: ViewContainerRef, static: true}) vc: ViewContainerRef;

  constructor(
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    const embeddedView = this.tpl.createEmbeddedView(null);

    const factory = this.componentFactoryResolver.resolveComponentFactory(ColorComponent);
    const colorComponentRef = factory.create(this.injector);
    const hostView = colorComponentRef.hostView;

    // this.vc.insert(embeddedView);
    // this.vc.insert(hostView);
  }

  cleanView(){
    this.vc.clear();
  }

}
