import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionForumComponent } from './discussion-forum.component';

describe('DiscussionForumComponent', () => {
  let component: DiscussionForumComponent;
  let fixture: ComponentFixture<DiscussionForumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscussionForumComponent]
    });
    fixture = TestBed.createComponent(DiscussionForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
