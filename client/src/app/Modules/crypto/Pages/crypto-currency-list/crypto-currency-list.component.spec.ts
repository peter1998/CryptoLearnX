import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCurrencyListComponent } from './crypto-currency-list.component';

describe('CryptoCurrencyListComponent', () => {
  let component: CryptoCurrencyListComponent;
  let fixture: ComponentFixture<CryptoCurrencyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptoCurrencyListComponent]
    });
    fixture = TestBed.createComponent(CryptoCurrencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
