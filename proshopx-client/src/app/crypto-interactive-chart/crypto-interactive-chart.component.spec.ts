import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoInteractiveChartComponent } from './crypto-interactive-chart.component';

describe('CryptoInteractiveChartComponent', () => {
  let component: CryptoInteractiveChartComponent;
  let fixture: ComponentFixture<CryptoInteractiveChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptoInteractiveChartComponent]
    });
    fixture = TestBed.createComponent(CryptoInteractiveChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
