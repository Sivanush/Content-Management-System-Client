import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { Article } from '../../../interface/article/article.interface';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../../service/article/article.service';
import { UserService } from '../../../service/user/user.service';
import { ToasterService } from '../../../service/toaster/toaster.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavbarComponent,RouterLink,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  articles: Article[] = [
    // Your article data here
  ];
isListed: any;

  constructor(private articleService:ArticleService,private userService:UserService, private toasterService:ToasterService) {
    
  }

  getStatusColor(status: string | undefined): string {
    switch (status?.toLowerCase()) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }


  ngOnInit(): void {
    this.articleService.getArticlesForUser().subscribe({
      next:(res)=>{
        this.articles = res
        
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
      error:(err)=>{
        console.log(err);
        
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

  // onEdit(articleId?: string) {
  //   console.log('Edit article:', articleId);
  //   // Implement edit logic here
  // }

  // onUnlist(articleId?: string) {
  //   console.log('Unlist article:', articleId);
  //   // Implement unlist logic here
  // }

  // onList(articleId?: string) {
  //   console.log('List article:', articleId);
  //   // Implement list logic here
  // }
}
