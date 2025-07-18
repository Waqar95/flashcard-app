import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { FlashcardService } from '.././services/flashcard.service';

@Component({
  selector: 'app-create-flashcard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-flashcard.component.html',
  styleUrls: ['./create-flashcard.component.css'],
})
export class CreateFlashcardComponent {
  flashcardForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private flashcardService: FlashcardService
  ) {
    // Initialize the form
    this.flashcardForm = this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required],
      topic: [''],
    });
  }

  onSubmit(): void {
    if (this.flashcardForm.valid) {
      this.flashcardService.add(this.flashcardForm.value);
      alert('Flashcard added!');
      this.flashcardForm.reset();
    }
  }
}
