import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Article } from '../../interface/article/article.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }

  private apiUrl = environment.apiUrl

  createArticle(article:any){
    return this.http.post(`${this.apiUrl}/article/create`, article)
  }

  getAllArticle():Observable<Article[]>{
    return this.http.get<Article[]>(`${this.apiUrl}/article`)
  }
}
