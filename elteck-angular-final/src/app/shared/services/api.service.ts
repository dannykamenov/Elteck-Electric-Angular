import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  addReview(review: Review) {
    return this.http.post<Review>('http://localhost:3000/reviews', review);
  }
}
