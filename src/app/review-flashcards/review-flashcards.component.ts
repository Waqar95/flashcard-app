import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashcardService } from '../services/flashcard.service';
import { Flashcard } from '../models/flashcard.model';

@Component({
  selector: 'app-review-flashcards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-flashcards.component.html',
  styleUrls: ['./review-flashcards.component.css'],
})
export class ReviewFlashcardsComponent implements OnInit {
  flashcards: Flashcard[] = [];

  constructor(private flashcardService: FlashcardService) {}

  ngOnInit(): void {
    // Get all flashcards when the component loads
    this.flashcards = this.flashcardService.getAll();
  }

  deleteFlashcard(id: number): void {
    this.flashcardService.delete(id);
    this.flashcards = this.flashcardService.getAll(); // Refresh list
  }
}
