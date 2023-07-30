import { Component } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { Review } from 'src/app/shared/services/review';
import {ApiService} from 'src/app/shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-review',
  templateUrl: './post-review.component.html',
  styleUrls: ['./post-review.component.scss']
})
export class PostReviewComponent {
  stars = [1, 2, 3, 4, 5];
  rating = 0;
  saveRating = 0;
  error: string = '';

  constructor(private api: ApiService, public router: Router) { }

  mouseEnterHandler(index: number) {
    if (this.saveRating === 0) {
      this.rating = index;
    }
    if(this.saveRating < index) {
      this.rating = index;
    }
  }

  mouseLeaveHandler() {
    if (this.saveRating === 0) {
      this.rating = 0;
    } else {
      this.rating = this.saveRating;
    }
  }

  clickHandler(index: number) {
    this.saveRating = index;
  }

  postReview(title: string, description: string) {
    const auth = getAuth();
    const isVerified = auth.currentUser?.emailVerified;
    if(isVerified && this.saveRating > 0) {
      const review: Review = {
        uid: auth.currentUser?.uid,
        title: title,
        content: description,
        rating: this.saveRating,
        username: auth.currentUser?.displayName,
        useremail: auth.currentUser?.email,
        userimage: auth.currentUser?.photoURL,
        isAuth: isVerified,
        isEdited: false
      }
      this.api.addReview(review).subscribe(
        (res) => {
        this.router.navigate(['/reviews']);
      }, (err) => {
        this.error = err.error.error;
        console.log(this.error);
      }
      );
    }
  }

}
