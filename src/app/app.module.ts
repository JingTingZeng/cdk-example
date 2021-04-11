import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PortalModule } from '@angular/cdk/portal';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { ComponentPortalDemoComponent } from './component-portal-demo/component-portal-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    ComponentPortalDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
