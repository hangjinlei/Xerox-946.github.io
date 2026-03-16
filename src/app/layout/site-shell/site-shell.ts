import { CommonModule } from '@angular/common';
import { Component, HostListener, computed, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { navItems } from '../../data/site-data';

@Component({
  selector: 'app-site-shell',
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  templateUrl: './site-shell.html',
  styleUrl: './site-shell.scss',
})
export class SiteShellComponent {
  protected readonly navItems = navItems;
  protected readonly isMobile = signal(this.detectMobile());
  protected readonly activeItem = computed(
    () =>
      this.navItems.find((item) =>
        item.path === '/'
          ? this.router.url === '/' || this.router.url.startsWith('/#')
          : this.router.url.includes(item.path),
      ) ?? this.navItems[0],
  );

  constructor(private readonly router: Router) {}

  @HostListener('window:resize')
  protected onResize(): void {
    this.isMobile.set(this.detectMobile());
  }

  protected closeIfMobile(drawer: { close: () => void }): void {
    if (this.isMobile()) {
      drawer.close();
    }
  }

  private detectMobile(): boolean {
    return typeof window !== 'undefined' ? window.innerWidth < 960 : false;
  }
}
