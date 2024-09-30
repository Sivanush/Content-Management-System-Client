
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interface/user/user.interface';
import { Injectable } from '@angular/core';
import { authorizationResponse } from './user.service.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl

  constructor(private http:HttpClient) { }

  signup(userData:User):Observable<authorizationResponse> {
    return this.http.post<authorizationResponse>(`${this.apiUrl}/user/signup`,userData)
  }

  login(userData:User):Observable<authorizationResponse> {
    return this.http.post<authorizationResponse>(`${this.apiUrl}/user/login`,userData)
  }
}
