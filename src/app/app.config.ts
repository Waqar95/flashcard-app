// Import core Angular types
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

// Import Angular Router types
import { provideRouter, Routes } from '@angular/router';

// Import our three components for routing
import { CreateFlashcardComponent } from './create-flashcard/create-flashcard.component';
import { EditFlashcardComponent } from './edit-flashcard/edit-flashcard.component';
import { ReviewFlashcardsComponent } from './review-flashcards/review-flashcards.component';

// Define app routes
const routes: Routes = [
  { path: '', redirectTo: 'review', pathMatch: 'full' }, // Default route redirects to /review
  { path: 'create', component: CreateFlashcardComponent }, // Renders CreateFlashCardComponent on /create
  { path: 'edit/:id', component: EditFlashcardComponent }, // Renders EditFlash±CardComponent with ID param
  { path: 'review', component: ReviewFlashcardsComponent }, // Renders Review±FlashCardComponent on / review
];

// Export configuration that provides router to the app
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
