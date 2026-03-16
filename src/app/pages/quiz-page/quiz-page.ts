import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { quizQuestions } from '../../data/site-data';

type QuizControls = Record<string, FormControl<string | null>>;

@Component({
  selector: 'app-quiz-page',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSnackBarModule,
  ],
  templateUrl: './quiz-page.html',
  styleUrl: './quiz-page.scss',
})
export class QuizPageComponent {
  private readonly snackBar = inject(MatSnackBar);

  protected readonly quizQuestions = quizQuestions;
  protected readonly quizForm = new FormGroup<QuizControls>({});
  protected readonly submitted = signal(false);
  protected readonly score = signal(0);
  protected readonly percentage = computed(() => (this.score() / this.quizQuestions.length) * 100);

  constructor() {
    for (const question of this.quizQuestions) {
      this.quizForm.addControl(question.id, new FormControl<string | null>(null, Validators.required));
    }
  }

  protected submitQuiz(): void {
    this.quizForm.markAllAsTouched();
    if (this.quizForm.invalid) {
      this.snackBar.open('还有题目未作答，请先完成全部选择。', '知道了', { duration: 2500 });
      return;
    }

    let score = 0;
    for (const question of this.quizQuestions) {
      if (this.quizForm.controls[question.id].value === question.answer) {
        score += 1;
      }
    }

    this.score.set(score);
    this.submitted.set(true);
    this.snackBar.open(`提交成功，你答对了 ${score} / ${this.quizQuestions.length} 题。`, '好的', {
      duration: 3000,
    });
  }

  protected resetQuiz(): void {
    this.quizForm.reset();
    this.submitted.set(false);
    this.score.set(0);
  }

  protected controlFor(id: string): FormControl<string | null> {
    return this.quizForm.controls[id];
  }
}
