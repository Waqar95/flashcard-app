import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlashcardService } from '.././services/flashcard.service';
import { Flashcard } from '.././models/flashcard.model';

@Component({
  selector: 'app-edit-flashcard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-flashcard.component.html',
  styleUrls: ['./edit-flashcard.component.css'],
})
export class EditFlashcardComponent implements OnInit {
  flashcardForm!: FormGroup;
  flashcardId!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private flashcardService: FlashcardService
  ) {}

  ngOnInit(): void {
    // Get ID from URL like /edit/3
    this.flashcardId = Number(this.route.snapshot.paramMap.get('id'));

    const flashcard = this.flashcardService.getById(this.flashcardId);

    if (!flashcard) {
      alert('Flashcard not found');
      this.router.navigate(['/review']);
      return;
    }

    // Build form with current flashcard values
    this.flashcardForm = this.fb.group({
      question: [flashcard.question, Validators.required],
      answer: [flashcard.answer, Validators.required],
      topic: [flashcard.topic || ''],
    });
  }

  onSubmit(): void {
    if (this.flashcardForm.valid) {
      this.flashcardService.update(this.flashcardId, this.flashcardForm.value);
      alert('Flashcard updated!');
      this.router.navigate(['/review']);
    }
  }
}
