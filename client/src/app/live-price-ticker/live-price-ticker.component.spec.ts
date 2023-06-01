import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivePriceTickerComponent } from './live-price-ticker.component';

describe('LivePriceTickerComponent', () => {
  let component: LivePriceTickerComponent;
  let fixture: ComponentFixture<LivePriceTickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivePriceTickerComponent]
    });
    fixture = TestBed.createComponent(LivePriceTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
