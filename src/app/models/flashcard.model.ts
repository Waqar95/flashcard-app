export interface Flashcard {
  id: number; // Unique ID for the flashcard
  question: string; // The front/question side of the flashcard
  answer: string; // The back/answer side of the flashcard
  topic?: string; // Optional topic/category like "Math", "French", etc
}
