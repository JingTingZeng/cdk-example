import { Overlay, OverlayRef, PositionStrategy, ScrollDispatcher } from '@angular/cdk/overlay';
import { CdkPortal, TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  @ViewChild('triggerBtn', {static: true}) toggleBtn: ElementRef;
  @ViewChild(CdkPortal) colorPicker: CdkPortal;

  selectedColor = '';

  colorList = [
    { hex: '#F44336', name: 'purple'},
    { hex: '#E91E63', name: 'red'},
    { hex: '#673AB7', name: 'pink'},
    { hex: '#3F51B5', name: 'Indigo'},
    { hex: '#00BCD4', name: 'Cyan'},
    { hex: '#4CAF50', name: 'green'},
    { hex: '#FFEB3B', name: 'yellow'},
    { hex: '#FF9800', name: 'orange'},
    { hex: '#795548', name: 'brown'},
  ];

  overlayRef: OverlayRef;

  constructor(
    private elementRef: ElementRef,
    private overlay: Overlay,
  ) { }

  ngOnInit(): void {

    const positionStrategy = this.overlay
      // 2. position strategy
      .position()
      // FlexibleConnectedPositionStrategy
      .flexibleConnectedTo(this.toggleBtn)
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top'
        }
      ])
      .withDefaultOffsetY(10)
      .withLockedPosition(true)
      // .withPush(true)
      // .withScrollableContainers()

      // GlobalPositionStrategy
      // .global()
      // .top()
      // .right()
      // .left()
      // .bottom()
      // .centerHorizontally()
      // .centerVertically()
      ;

      // 3. scroll strategy
      const scrollStrategy = this.overlay.scrollStrategies.reposition();
      
      // 1. create overlayRef
      this.overlayRef = this.overlay.create({
        hasBackdrop: true,
        backdropClass: 'customBackdrop',
        // positionStrategy: positionStrategy,
        // scrollStrategy: scrollStrategy
    }); 



    this.overlayRef.backdropClick().subscribe(()=>this.toggleColorPicker())

  }

  
  toggleColorPicker(){
    if(this.overlayRef && this.overlayRef.hasAttached()){
      this.overlayRef.detach();
    }else{
      this.overlayRef.attach(this.colorPicker);
    }
  }

  pickColor(item){
    this.selectedColor = item.hex;
    this.toggleColorPicker();
  }
}
