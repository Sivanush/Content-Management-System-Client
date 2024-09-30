import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styles: [`
 
  `],
  animations: [
    trigger('float', [
      state('void', style({ transform: 'translateY(0)' })),
      transition(':enter', [
        animate('0.5s ease-in', style({ transform: 'translateY(-10px)' }))
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({ transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent {



  categories = [
    { name: 'Marketing', articleCount: 12, description: 'Tips and strategies for digital marketing' },
  ]

  navItems = [
    { label: 'Dashboard', link: '/' },
    { label: 'Articles', link: '/articles' },
    { label: 'Categories', link: '/categories' },
    { label: 'Analytics', link: '/analytics' },
  ];

  currentPage = '/';
  pageTitle = 'Dashboard';

  articles = [
    { title: 'Boost your conversion rate', status: 'Published', date: 'Jan 7, 2024', author: 'John Doe' },
    { title: 'How to use search engine optimization', status: 'Draft', date: 'Jan 5, 2024', author: 'Jane Smith' },
    { title: 'Improve your customer experience', status: 'Published', date: 'Jan 3, 2024', author: 'Bob Johnson' },
  ];

  constructor() {
    // Simulate routing (in a real app, use Angular Router)
    setTimeout(() => {
      this.currentPage = '/articles';
      this.pageTitle = 'Articles';
    }, 2000);
  }

}