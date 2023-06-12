import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonTableComponent } from './comparison-table.component';

describe('ComparisonTableComponent', () => {
  let component: ComparisonTableComponent;
  let fixture: ComponentFixture<ComparisonTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComparisonTableComponent]
    });
    fixture = TestBed.createComponent(ComparisonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
