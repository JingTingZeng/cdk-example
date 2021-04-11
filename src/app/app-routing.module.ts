import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverlayDemoComponent } from './overlay-demo/overlay-demo.component';
import { PortalDemoComponent } from './portal-demo/portal-demo.component';

const routes: Routes = [
  {
    path: 'portal-demo',
    component: PortalDemoComponent
  },
  {
    path: 'overlay-demo',
    component: OverlayDemoComponent
  },
  {
    path: '**',
    redirectTo: 'portal-demo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
