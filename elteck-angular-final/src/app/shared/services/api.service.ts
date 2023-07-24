import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Review } from './review';
import { getReview } from './getReview';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  addReview(review: Review) {
    return this.http.post<Review>('http://localhost:3000/api/reviews', review);
  }

  getReviews() {
    return this.http.get<getReview[]>('http://localhost:3000/api/reviews');
  }
}
