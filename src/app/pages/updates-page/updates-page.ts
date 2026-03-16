import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

import { domesticUpdates, internationalUpdates, updateOverview } from '../../data/site-data';

@Component({
  selector: 'app-updates-page',
  imports: [CommonModule, MatCardModule, MatChipsModule, MatDividerModule, MatIconModule, MatListModule, MatTabsModule],
  templateUrl: './updates-page.html',
  styleUrl: './updates-page.scss',
})
export class UpdatesPageComponent {
  protected readonly updateOverview = updateOverview;
  protected readonly domesticUpdates = domesticUpdates;
  protected readonly internationalUpdates = internationalUpdates;
}
