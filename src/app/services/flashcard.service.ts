import { Injectable } from '@angular/core';
import { Flashcard } from '../models/flashcard.model';

const STORAGE_KEY = 'flashcards';

@Injectable({
  providedIn: 'root',
})
export class FlashcardService {
  private flashcards: Flashcard[] = [];
  private nextId = 1;

  constructor() {
    this.loadFromStorage();
  }

  private saveToStorage(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.flashcards));
  }

  private loadFromStorage(): void {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      this.flashcards = JSON.parse(stored);
      const maxId = this.flashcards.reduce(
        (max, fc) => Math.max(max, fc.id),
        0
      );
      this.nextId = maxId + 1;
    }
  }

  getAll(): Flashcard[] {
    return this.flashcards;
  }

  getById(id: number): Flashcard | undefined {
    return this.flashcards.find((fc) => fc.id === id);
  }

  add(flashcard: Omit<Flashcard, 'id'>): void {
    const newFlashcard: Flashcard = { id: this.nextId++, ...flashcard };
    this.flashcards.push(newFlashcard);
    console.log('Flashcard added', newFlashcard);
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
