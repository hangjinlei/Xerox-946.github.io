import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';

import { knowledgeTopics } from '../../data/site-data';

@Component({
  selector: 'app-knowledge-page',
  imports: [CommonModule, MatCardModule, MatChipsModule, MatExpansionModule],
  templateUrl: './knowledge-page.html',
  styleUrl: './knowledge-page.scss',
})
export class KnowledgePageComponent {
  protected readonly knowledgeTopics = knowledgeTopics;
}
