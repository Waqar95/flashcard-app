import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewFlashcardsComponent } from './review-flashcards.component';

describe('ReviewFlashcardsComponent', () => {
  let component: ReviewFlashcardsComponent;
  let fixture: ComponentFixture<ReviewFlashcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewFlashcardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewFlashcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
