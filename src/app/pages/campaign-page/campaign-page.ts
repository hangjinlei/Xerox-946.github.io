import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { campaignMessages } from '../../data/site-data';

@Component({
  selector: 'app-campaign-page',
  imports: [CommonModule, MatButtonModule, MatCardModule, MatChipsModule, MatExpansionModule, MatIconModule],
  templateUrl: './campaign-page.html',
  styleUrl: './campaign-page.scss',
})
export class CampaignPageComponent {
  protected readonly campaignMessages = campaignMessages;
}
