import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReviewsComponent } from './my-reviews.component';

describe('MyReviewsComponent', () => {
  let component: MyReviewsComponent;
  let fixture: ComponentFixture<MyReviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyReviewsComponent]
    });
    fixture = TestBed.createComponent(MyReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
