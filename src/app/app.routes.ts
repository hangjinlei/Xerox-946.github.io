import { Routes } from '@angular/router';

import { SiteShellComponent } from './layout/site-shell/site-shell';

export const routes: Routes = [
  {
    path: '',
    component: SiteShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        title: '首页',
        loadComponent: () => import('./pages/home-page/home-page').then((m) => m.HomePageComponent),
      },
      {
        path: 'campaign',
        title: '防疫宣传',
        loadComponent: () => import('./pages/campaign-page/campaign-page').then((m) => m.CampaignPageComponent),
      },
      {
        path: 'quiz',
        title: '相关题目',
        loadComponent: () => import('./pages/quiz-page/quiz-page').then((m) => m.QuizPageComponent),
      },
      {
        path: 'knowledge',
        title: '知识普及',
        loadComponent: () => import('./pages/knowledge-page/knowledge-page').then((m) => m.KnowledgePageComponent),
      },
      {
        path: 'updates',
        title: '疫情情报',
        loadComponent: () => import('./pages/updates-page/updates-page').then((m) => m.UpdatesPageComponent),
      },
      {
        path: 'survey',
        title: '信息调查',
        loadComponent: () => import('./pages/survey-page/survey-page').then((m) => m.SurveyPageComponent),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
