import { Component } from '@angular/core';
import { getAuth } from 'firebase/auth';
import { Review } from 'src/app/shared/services/review';

@Component({
  selector: 'app-post-review',
  templateUrl: './post-review.component.html',
  styleUrls: ['./post-review.component.scss']
})
export class PostReviewComponent {
  stars = [1, 2, 3, 4, 5];
  rating = 0;
  saveRating = 0;

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
    if(isVerified) {
      const review: Review = {
        uid: auth.currentUser?.uid,
        title: title,
        content: description,
        rating: this.saveRating,
        username: auth.currentUser?.displayName,
        useremail: auth.currentUser?.email,
        userimage: auth.currentUser?.photoURL
      }
      console.log(review);
    }
  }

}
