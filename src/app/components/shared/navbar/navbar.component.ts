import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  subscription!:Subscription
  currentPage: string = '';
  navItems = [
    { label: 'Dashboard', link: '/' },
    { label: 'Articles', link: '/articles' },
    { label: 'Categories', link: '/categories' },
    { label: 'Analytics', link: '/analytics' },
  ];

  constructor(private router: Router) {}



  ngOnInit(): void {
    this.subscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentPage = event.url; // Get the current route
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


}
