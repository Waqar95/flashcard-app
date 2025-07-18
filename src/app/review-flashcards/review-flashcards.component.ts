import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlashcardService } from '../services/flashcard.service';
import { Flashcard } from '../models/flashcard.model';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-review-flashcards',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './review-flashcards.component.html',
  styleUrls: ['./review-flashcards.component.css'],
})
export class ReviewFlashcardsComponent implements OnInit {
  flashcards: Flashcard[] = [];

  constructor(private flashcardService: FlashcardService) {}

  flippedCards: Set<number> = new Set();

  toggleFlip(id: number): void {
    if (this.flippedCards.has(id)) {
      this.flippedCards.delete(id);
    } else {
      this.flippedCards.add(id);
    }
  }

  isFlipped(id: number): boolean {
    return this.flippedCards.has(id);
  }

  ngOnInit(): void {
    // Get all flashcards when the component loads
    this.flashcards = this.flashcardService.getAll();
  }

  deleteFlashcard(id: number): void {
    this.flashcardService.delete(id);
    this.flashcards = this.flashcardService.getAll(); // Refresh list
  }
}
