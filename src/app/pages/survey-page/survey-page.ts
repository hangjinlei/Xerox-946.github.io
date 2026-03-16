import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { surveyTips } from '../../data/site-data';

interface SurveyForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  phone: FormControl<string>;
  comments: FormControl<string>;
}

@Component({
  selector: 'app-survey-page',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  templateUrl: './survey-page.html',
  styleUrl: './survey-page.scss',
})
export class SurveyPageComponent {
  private readonly snackBar = inject(MatSnackBar);

  protected readonly surveyTips = surveyTips;
  protected readonly submitted = signal(false);
  protected readonly surveyForm = new FormGroup<SurveyForm>({
    firstName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    lastName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    phone: new FormControl('', { nonNullable: true, validators: [Validators.maxLength(12)] }),
    comments: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  protected submitSurvey(): void {
    this.surveyForm.markAllAsTouched();
    if (this.surveyForm.invalid) {
      this.snackBar.open('请先完整填写必填项。', '知道了', { duration: 2500 });
      return;
    }

    this.submitted.set(true);
    this.snackBar.open('信息已提交，感谢你的反馈。', '好的', { duration: 3000 });
  }
}
