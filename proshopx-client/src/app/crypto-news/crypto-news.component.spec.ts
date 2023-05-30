import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoNewsComponent } from './crypto-news.component';

describe('CryptoNewsComponent', () => {
  let component: CryptoNewsComponent;
  let fixture: ComponentFixture<CryptoNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CryptoNewsComponent]
    });
    fixture = TestBed.createComponent(CryptoNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
