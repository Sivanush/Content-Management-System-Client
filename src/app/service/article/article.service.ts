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

  createArticle(article:Article):Observable<Article>{
    return this.http.post<Article>(`${this.apiUrl}/article/create`, article)
  }

  getAllArticle():Observable<Article[]>{
    return this.http.get<Article[]>(`${this.apiUrl}/article`)
  }

  getArticle(id:string):Observable<Article>{
    return this.http.get<Article>(`${this.apiUrl}/article/${id}`)
  }

  getArticlesForUser():Observable<Article[]>{
    return this.http.get<Article[]>(`${this.apiUrl}/article/profile/list`);
  }

  editArticle(id:string,article:Article){
    return this.http.post(`${this.apiUrl}/article/${id}`, article);
  }
}
