import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { homeFeatures, homeHighlights } from '../../data/site-data';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatIconModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePageComponent implements AfterViewInit {
  @ViewChild('previewVideo') private readonly previewVideo?: ElementRef<HTMLVideoElement>;

  protected readonly homeHighlights = homeHighlights;
  protected readonly homeFeatures = homeFeatures;
  protected readonly isPlaying = signal(false);
  protected readonly isMuted = signal(true);

  ngAfterViewInit(): void {
    const video = this.previewVideo?.nativeElement;
    if (video) {
      video.muted = true;
    }
  }

  protected togglePlayback(): void {
    const video = this.previewVideo?.nativeElement;
    if (!video) {
      return;
    }

    if (video.paused) {
      void video.play();
      this.isPlaying.set(true);
      return;
    }

    video.pause();
    this.isPlaying.set(false);
  }

  protected toggleMute(): void {
    const video = this.previewVideo?.nativeElement;
    if (!video) {
      return;
    }

    video.muted = !video.muted;
    this.isMuted.set(video.muted);
  }
}
