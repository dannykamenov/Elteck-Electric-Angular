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
    return this.http.post<Review>('https://elteck-server.onrender.com/api/reviews', review);
  }

  getReviews() {
    return this.http.get<getReview[]>('https://elteck-server.onrender.com/api/reviews');
  }

  getLatestReviews() {
    return this.http.get<getReview[]>('https://elteck-server.onrender.com/api/latest?limit=3');
  }

  updateUserInfo(review: any) {
    return this.http.post<Review>('https://elteck-server.onrender.com/api/update', review);
  }

  getAverageRating() {
    return this.http.get<any>('https://elteck-server.onrender.com/api/average');
  }

  getMyReviews(uid: any) {
    return this.http.get<getReview[]>('https://elteck-server.onrender.com/api/myreviews', {params: {uid: uid}});
  }
}
