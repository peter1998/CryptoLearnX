import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IotLandingPageComponent } from './iot-landing-page.component';

describe('IotLandingPageComponent', () => {
  let component: IotLandingPageComponent;
  let fixture: ComponentFixture<IotLandingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IotLandingPageComponent]
    });
    fixture = TestBed.createComponent(IotLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
