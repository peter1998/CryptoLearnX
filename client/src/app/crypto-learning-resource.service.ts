import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LearningResourceService {
  constructor(private http: HttpClient) {}

  getLearningResources(): Observable<any> {
    // Replace the URL with the actual API endpoint
    return this.http.get('https://api.example.com/learning-resources');
  }
}
