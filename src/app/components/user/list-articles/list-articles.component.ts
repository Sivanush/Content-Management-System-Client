import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../../service/article/article.service';
import { ToasterService } from '../../../service/toaster/toaster.service';
import { Article } from '../../../interface/article/article.interface';

@Component({
  selector: 'app-list-articles',
  standalone: true,
  imports: [NavbarComponent,RouterLink,CommonModule],
  templateUrl: './list-articles.component.html',
  styleUrl: './list-articles.component.scss'
})
export class ListArticlesComponent {

  constructor(private articleService:ArticleService,private toasterService:ToasterService) {}


  getAllArticle(){
    this.articleService.getAllArticle().subscribe({
      next: (data) => {
        this.articles = data
      },
      error:(error)=>{
        console.log(error)
        this.toasterService.showError('Something Went Wrong, Try again')
      }
    })
  }

  ngOnInit(): void {
    this.getAllArticle()
  }

  articles: Article[] = [
    {
      id: 1,
      title: 'Getting Started with Angular',
      description: 'Learn the basics of Angular and build your first app.',
      date: '2024-10-01',
      author: 'John Doe',
      categories: ['Angular', 'Web Development'],
      status: 'Published'
    },
    {
      id: 1,
      title: 'Getting Started with Angular',
      description: 'Learn the basics of Angular and build your first app.',
      date: '2024-10-01',
      author: 'John Doe',
      categories: ['Angular', 'Web Development'],
      status: 'Published'
    },
    {
      id: 1,
      title: 'Getting Started with Angular',
      description: 'Learn the basics of Angular and build your first app.',
      date: '2024-10-01',
      author: 'John Doe',
      categories: ['Angular', 'Web Development'],
      status: 'Published'
    },

    {
      id: 1,
      title: 'Getting Started with Angular',
      description: 'Learn the basics of Angular and build your first app.',
      date: '2024-10-01',
      author: 'John Doe',
      categories: ['Angular', 'Web Development'],
      status: 'Published'
    },
    {
      id: 1,
      title: 'Getting Started with Angular',
      description: 'Learn the basics of Angular and build your first app.',
      date: '2024-10-01',
      author: 'John Doe',
      categories: ['Angular', 'Web Development'],
      status: 'Published'
    },

    {
      id: 1,
      title: 'Getting Started with Angular',
      description: 'Learn the basics of Angular and build your first app.',
      date: '2024-10-01',
      author: 'John Doe',
      categories: ['Angular', 'Web Development'],
      status: 'Published'
    },
    // Add more sample articles here
  ];





  getStatusColor(status: string): string {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-800';
      case 'Draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'Under Review':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
}
