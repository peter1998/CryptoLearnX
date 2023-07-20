import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBoardComponent } from './landing-board.component';

describe('LandingBoardComponent', () => {
  let component: LandingBoardComponent;
  let fixture: ComponentFixture<LandingBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingBoardComponent]
    });
    fixture = TestBed.createComponent(LandingBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
