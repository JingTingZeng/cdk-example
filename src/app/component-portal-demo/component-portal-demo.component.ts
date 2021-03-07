import { Component, Inject, OnInit } from '@angular/core';
import { EXAMPLE_DATA } from '../tab/tab.component';

@Component({
  selector: 'app-component-portal-demo',
  templateUrl: './component-portal-demo.component.html',
  styleUrls: ['./component-portal-demo.component.scss']
})
export class ComponentPortalDemoComponent implements OnInit {

  name: string;
  constructor(@Inject(EXAMPLE_DATA) private data: any) { 
    this.name = this.data;
  }

  ngOnInit(): void {
  }

}
