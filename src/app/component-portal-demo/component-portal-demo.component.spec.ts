import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPortalDemoComponent } from './component-portal-demo.component';

describe('ComponentPortalDemoComponent', () => {
  let component: ComponentPortalDemoComponent;
  let fixture: ComponentFixture<ComponentPortalDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentPortalDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentPortalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
