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

  updateUserInfo(name: string, uid: string | undefined) {
    return this.http.post('https://elteck-server.onrender.com/api/update', {name: name, uid: uid});
  }
}
