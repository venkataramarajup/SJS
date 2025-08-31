import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'sjs-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLinkActive,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  menuOpen = false;

  constructor(private eleRef: ElementRef) {}

  allLinks: NavItem[] = [
    { label: 'Home', icon: 'fa-home', route: '/home/dashboard' },
    { label: 'Special Events', icon: 'fa-calendar-o', route: '/home/events' },
    { label: 'Products', icon: 'fa-truck', route: '/home/products' },
    { label: 'Contact', icon: 'fa-phone', route: '/home/contact' },
    { label: 'History', icon: 'fa fa-history', route: '/home/history' },
    // { label: 'Profile', icon: 'fa-user', route: '/profile' },
    // { label: 'Settings', icon: 'fa-cog', route: '/settings' }
  ];

  visibleLinks: NavItem[] = [];
  moreLinks: NavItem[] = [];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  moreOpen = false;

  ngOnInit(): void {
    this.adjustMenu();
  }

  toggleMore() {
    this.moreOpen = !this.moreOpen;
  }


    @HostListener('window:resize')
  adjustMenu() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 767) {
      // Small screens → All items go into "More"
      this.visibleLinks = this.allLinks.slice(0, 4);
      this.moreLinks = this.allLinks.slice(4, this.allLinks.length);
    } else {
      // Large screens → First 4 items visible, rest in "More"
      this.visibleLinks = this.allLinks;
      this.moreLinks = [];
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.more-menu')) {
      this.moreOpen = false;
    }
  }
}

interface NavItem {
  label: string;
  icon: string;
  route?: string;
}
