import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CryptoCurrencyDetailComponent } from './crypto-currency-detail.component';

describe('CryptoCurrencyDetailComponent', () => {
  let component: CryptoCurrencyDetailComponent;
  let fixture: ComponentFixture<CryptoCurrencyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CryptoCurrencyDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoCurrencyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
