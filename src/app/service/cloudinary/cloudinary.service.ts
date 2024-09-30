import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

interface cloudinaryResponse{
  secure_url:string
}



@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {

  constructor(private http: HttpClient) { }

  private cloudName = environment.CLOUDINARY_CLOUD_NAME
  private uploadPreset = environment.CLOUDINARY_UPLOADPRESET

  uploadImage(file: File): Observable<cloudinaryResponse> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', this.uploadPreset); 

    return this.http.post<cloudinaryResponse>(`https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`, formData);
  }

  uploadVideo(file: File): Observable<cloudinaryResponse> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', this.uploadPreset); 

    return this.http.post<cloudinaryResponse>(`https://api.cloudinary.com/v1_1/${this.cloudName}/video/upload`, formData)
  }

}
