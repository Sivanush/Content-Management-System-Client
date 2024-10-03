import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../service/article/article.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { Article } from '../../../interface/article/article.interface';


@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {

  article!: Article 

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');
    if (articleId) {
      this.loadArticle(articleId);
    }
  }

  private loadArticle(id: string): void {
    this.articleService.getArticle(id).subscribe({
      next: (article) => {
        this.article = article;
        console.log(article);
        
      },
      error: (error) => {
        console.error('Error loading article:', error);
        // Handle error (e.g., show error message to user)
      }
    });
  }
}
