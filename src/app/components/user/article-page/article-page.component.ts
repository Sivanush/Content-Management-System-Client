import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../service/article/article.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { Article } from '../../../interface/article/article.interface';
import { Observable } from 'rxjs';
import { UserService } from '../../../service/user/user.service';


@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {

  article!: Article 
  username!: string;
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private userService:UserService
  ) {}

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');
    if (articleId) {
      this.loadArticle(articleId);
     
  }
}

  getUsername(userId:string){
    this.userService.getUserDataById(userId).subscribe({
      next:(res)=>{
        console.log(res);
        this.username = res.username;
      },
      error:(err)=>{
        console.log(err);
         this.username = 'Unknown'
      }
    })
  }

  private loadArticle(id: string): void {
    this.articleService.getArticle(id).subscribe({
      next: (article) => {
        this.article = article;
        console.log(article);
        this.getUsername(this.article.author!);  
        
      },
      error: (error) => {
        console.error('Error loading article:', error);
        // Handle error (e.g., show error message to user)
      }
    });
  }
}
