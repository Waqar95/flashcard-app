import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewFlashcardComponent } from './review-flashcard.component';

describe('ReviewFlashcardComponent', () => {
  let component: ReviewFlashcardComponent;
  let fixture: ComponentFixture<ReviewFlashcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewFlashcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewFlashcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
