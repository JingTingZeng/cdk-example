import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { ComponentPortalDemoComponent } from './component-portal-demo/component-portal-demo.component';
import { DomPortalDemoComponent } from './dom-portal-demo/dom-portal-demo.component';
import { PortalDemoComponent } from './portal-demo/portal-demo.component';
import { OverlayDemoComponent } from './overlay-demo/overlay-demo.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    ComponentPortalDemoComponent,
    DomPortalDemoComponent,
    PortalDemoComponent,
    OverlayDemoComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortalModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
