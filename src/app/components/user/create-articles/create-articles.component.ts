import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CloudinaryService } from '../../../service/cloudinary/cloudinary.service';
import { ArticleService } from '../../../service/article/article.service';
import { ToasterService } from '../../../service/toaster/toaster.service';
import { ChipsModule } from 'primeng/chips';

interface ContentBlock {
  id: string;
  type: 'header' | 'text' | 'image' | 'video';
  content: string;
}

@Component({
  selector: 'app-create-articles',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule, ChipsModule],
  templateUrl: './create-articles.component.html',
  styleUrl: './create-articles.component.scss'
})
export class CreateArticlesComponent implements OnInit {
  articleTitle: string = '';
  articleDescription:string = ''
  contentBlocks: ContentBlock[] = [];
  isUploading: boolean = false;
  tags: string[] = [];

  constructor(
    private toasterService: ToasterService,
    private cloudinaryService: CloudinaryService,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.addBlock();
  }

  addBlock() {
    const newBlock: ContentBlock = {
      id: this.generateUniqueId(),
      type: 'text',
      content: ''
    };
    this.contentBlocks = [...this.contentBlocks, newBlock];
  }

  removeBlock(index: number) {
    this.contentBlocks = this.contentBlocks.filter((_, i) => i !== index);
  }

  moveBlockUp(index: number) {
    if (index > 0) {
      this.swapBlocks(index, index - 1);
    }
  }

  moveBlockDown(index: number) {
    if (index < this.contentBlocks.length - 1) {
      this.swapBlocks(index, index + 1);
    }
  }

  swapBlocks(index1: number, index2: number) {
    const newBlocks = [...this.contentBlocks];
    [newBlocks[index1], newBlocks[index2]] = [
      { ...newBlocks[index2], id: newBlocks[index1].id },
      { ...newBlocks[index1], id: newBlocks[index2].id }
    ];
    this.contentBlocks = newBlocks;
  }

  onBlockTypeChange(index: number) {
    this.contentBlocks = this.contentBlocks.map((block, i) => 
      i === index ? { ...block, content: '' } : block
    );
  }

  onSubmit() {
    console.log('Publishing article...', this.getArticleData());
    this.toasterService.loadingToaster(
      this.articleService.createArticle(this.getArticleData()),
      'Article Created Successfully'
    ).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }

  addTag(event: any) {
    const value = event.target.value.trim();
    if (value && !this.tags.includes(value) && this.tags.length < 3) {
      this.tags = [...this.tags, value];
      event.target.value = '';
    }
    event.preventDefault();
  }

  removeTag(index: number) {
    this.tags = this.tags.filter((_, i) => i !== index);
  }

  private getArticleData() {
    return {
      title: this.articleTitle,
      description: this.articleDescription,
      content: this.contentBlocks,
      tags: this.tags
    };
  }

  onFileSelected(event: Event, type: 'image' | 'video', index: number): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.isUploading = true;
      const uploadObservable = type === 'image' 
        ? this.cloudinaryService.uploadImage(file)
        : this.cloudinaryService.uploadVideo(file);

      uploadObservable.subscribe({
        next: (response) => {
          this.contentBlocks = this.contentBlocks.map((block, i) => 
            i === index ? { ...block, content: response.secure_url } : block
          );
          this.isUploading = false;
        },
        error: (error) => {
          console.error(`${type} upload failed`, error);
          this.isUploading = false;
        }
      });
    }
  }

  private generateUniqueId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}