import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoCurrencyLearningResourcesComponent } from './crypto-currency-learning-resources.component';

describe('CryptoCurrencyLearningResourcesComponent', () => {
  let component: CryptoCurrencyLearningResourcesComponent;
  let fixture: ComponentFixture<CryptoCurrencyLearningResourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptoCurrencyLearningResourcesComponent]
    });
    fixture = TestBed.createComponent(CryptoCurrencyLearningResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
