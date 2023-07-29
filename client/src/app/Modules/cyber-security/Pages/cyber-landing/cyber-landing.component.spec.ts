import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberLandingComponent } from './cyber-landing.component';

describe('CyberLandingComponent', () => {
  let component: CyberLandingComponent;
  let fixture: ComponentFixture<CyberLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyberLandingComponent]
    });
    fixture = TestBed.createComponent(CyberLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
