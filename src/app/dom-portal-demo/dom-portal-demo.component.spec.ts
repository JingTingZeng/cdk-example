import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomPortalDemoComponent } from './dom-portal-demo.component';

describe('DomPortalDemoComponent', () => {
  let component: DomPortalDemoComponent;
  let fixture: ComponentFixture<DomPortalDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomPortalDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomPortalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
