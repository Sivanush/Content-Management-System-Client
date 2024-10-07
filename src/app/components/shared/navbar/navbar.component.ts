import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  subscription!:Subscription
  currentPage: string = '';
  navItems = [
    { label: 'Home', link: '' },
    { label: 'Dashboard', link: '/dashboard' },
    { label: 'Create', link: '/create' },
    // { label: 'Analytics', link: '/analytics' },
  ];

  constructor(private router: Router) {}



  ngOnInit(): void {
    
    
    this.subscription = this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd) // Type guard here
      )
      
      .subscribe((event) => {
        this.currentPage = event.url; // Get the current route
        console.log('Current page:', this.currentPage); // Log the current route
      });
    console.log('end');

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Clean up the subscription
  }


}
