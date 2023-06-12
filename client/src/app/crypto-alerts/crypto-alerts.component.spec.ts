import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoAlertsComponent } from './crypto-alerts.component';

describe('CryptoAlertsComponent', () => {
  let component: CryptoAlertsComponent;
  let fixture: ComponentFixture<CryptoAlertsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptoAlertsComponent]
    });
    fixture = TestBed.createComponent(CryptoAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
