import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CloudinaryService } from '../../../service/cloudinary/cloudinary.service';
import { ArticleService } from '../../../service/article/article.service';
import { ToasterService } from '../../../service/toaster/toaster.service';

@Component({
  selector: 'app-create-articles',
  standalone: true,
  imports: [NavbarComponent,FormsModule,CommonModule],
  templateUrl: './create-articles.component.html',
  styleUrl: './create-articles.component.scss'
})
export class CreateArticlesComponent {

  blocks: any[] = []; 
  articleTitle: string = '';
  articleCategory: string = '';
  contentBlocks: any[] = [];
  isUploading: boolean = false
  // isLoading

  constructor(private toasterService: ToasterService,private cloudinaryService:CloudinaryService,private articleService:ArticleService) {
    
  }

  addBlock() {
    this.contentBlocks.push({ type: 'text', content: '' });
  }

  removeBlock(index: number) {
    this.contentBlocks.splice(index, 1);
  }

  moveBlockUp(index: number) {
    if (index > 0) {
      [this.contentBlocks[index - 1], this.contentBlocks[index]] = [this.contentBlocks[index], this.contentBlocks[index - 1]];
    }
  }

  moveBlockDown(index: number) {
    if (index < this.contentBlocks.length - 1) {
      [this.contentBlocks[index], this.contentBlocks[index + 1]] = [this.contentBlocks[index + 1], this.contentBlocks[index]];
    }
  }

  onBlockTypeChange(index: number) {
    this.contentBlocks[index].content = '';
  }

  onSubmit() {
    console.log('Publishing article...', this.getArticleData());
    this.toasterService.loadingToaster(this.articleService.createArticle(this.getArticleData()),'Article Created Successfully').then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }

  private getArticleData() {
    return {
      title: this.articleTitle,
      category: this.articleCategory,
      content: this.contentBlocks
    };
  }



  onFileSelected(event: Event, type: 'image' | 'video', index: number): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    this.isUploading = true
    if (file) {
      let uploadObservable;
      if (type === 'image') {
        uploadObservable = this.cloudinaryService.uploadImage(file);
      } else if (type === 'video') {
        uploadObservable = this.cloudinaryService.uploadVideo(file); // Corrected video upload method
      }
  
      if (uploadObservable) {
        uploadObservable.subscribe({
          next: (response) => {
            this.contentBlocks[index].content = response.secure_url; // Save the file URL after upload
            this.isUploading = false
          },
          error: (error) => {
            console.error(`${type} upload failed`, error);
            this.isUploading = false
          }
        });
      }
    }
  }
  

}
