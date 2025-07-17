import { Injectable } from '@angular/core';
import { Flashcard } from '../models/flashcard.model';

@Injectable({
  providedIn: 'root',
})
export class FlashcardService {
  private flashcards: Flashcard[] = [];
  private nextId = 1;

  constructor() {}

  getAll(): Flashcard[] {
    return this.flashcards;
  }

  getById(id: number): Flashcard | undefined {
    return this.flashcards.find((fc) => fc.id === id);
  }

  add(flashcard: Omit<Flashcard, 'id'>): void {
    const newFlashcard: Flashcard = { id: this.nextId++, ...flashcard };
    this.flashcards.push(newFlashcard);
  }

  update(id: number, updated: Omit<Flashcard, 'id'>): void {
    const index = this.flashcards.findIndex((fc) => fc.id === id);
    if (index !== -1) {
      this.flashcards[index] = { id, ...updated };
    }
  }

  delete(id: number): void {
    this.flashcards = this.flashcards.filter((fc) => fc.id !== id);
  }
}
