import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../../service/article/article.service';
import { ToasterService } from '../../../service/toaster/toaster.service';
import { Article } from '../../../interface/article/article.interface';
import { ChipsModule } from 'primeng/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../service/user/user.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list-articles',
  standalone: true,
  imports: [NavbarComponent,RouterLink,CommonModule,ReactiveFormsModule,ChipsModule,FormsModule,CommonModule],
  templateUrl: './list-articles.component.html',
  styleUrl: './list-articles.component.scss'
})
export class ListArticlesComponent {

  constructor(private articleService:ArticleService,private toasterService:ToasterService,private userService:UserService) {}

  getAllArticle(){
    this.articleService.getAllArticle().subscribe({
      next: (data) => {
        this.articles = data

        this.articles.forEach((ele)=>{
          this.getUsername(ele.author!).then((res)=>{
            ele.author = res
          })
          .catch((err)=>{
            console.log(err)
            this.toasterService.showError('Failed to fetch username');
          })
        })

      },
      error:(error)=>{
        console.log(error)
        this.toasterService.showError('Something Went Wrong, Try again')
      }
    })
  }


  getUsername(userId:string): Promise<string>{
    return this.userService.getUserDataById(userId).toPromise().then((res) => {
      return res?.username || 'Unknown';  
    })
    .catch((err) => {
      console.log(err);
      this.toasterService.showError('Failed to fetch username');
      return 'Unknown';  
    });
  }

  ngOnInit(): void {
    this.getAllArticle()
  }

  articles!: Article[] 





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
