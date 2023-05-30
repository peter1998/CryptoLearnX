import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCurrencyLandingComponent } from './crypto-currency-landing.component';

describe('CryptoCurrencyLandingComponent', () => {
  let component: CryptoCurrencyLandingComponent;
  let fixture: ComponentFixture<CryptoCurrencyLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptoCurrencyLandingComponent]
    });
    fixture = TestBed.createComponent(CryptoCurrencyLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
