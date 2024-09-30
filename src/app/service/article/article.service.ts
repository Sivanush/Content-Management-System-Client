import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }

  private apiUrl = environment.apiUrl

  createArticle(article:any){
    return this.http.post(`${this.apiUrl}/create-article`, article)
  }
}
