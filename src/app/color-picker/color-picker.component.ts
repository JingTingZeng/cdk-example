import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  isOpen = false;
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
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
