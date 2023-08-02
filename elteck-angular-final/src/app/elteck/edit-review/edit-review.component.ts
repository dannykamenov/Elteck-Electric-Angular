import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { ApiService } from 'src/app/shared/services/api.service';
import { Review } from 'src/app/shared/services/review';

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.scss']
})
export class EditReviewComponent {
  stars = [1, 2, 3, 4, 5];
  rating = 0;
  saveRating = 0;
  error: string = '';
  getTitle: string = '';
  getContent: string = '';
  edited: boolean = false;
  review: Review = {
    uid: '',
    title: '',
    content: '',
    rating: 0,
    username: '',
    useremail: '',
    userimage: '',
    isAuth: false,
    isEdited: false,
  }


  constructor(private api: ApiService, public router: Router) { 
    this.api.getReview(this.router.url.split('/')[2]).subscribe((data: Review) => {
      this.review = data;
      this.rating = this.review.rating;
      this.saveRating = this.review.rating;
      this.getTitle = this.review.title;
      this.getContent = this.review.content;
      this.edited = this.review.isEdited;
    })
  }

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

  editReview(title: string, content: string) {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const id = this.router.url.split('/')[2];
      let edited = this.edited;
      const rating = this.saveRating;
      if(!edited) {
        edited = true;
        this.api.updateReview({title, content, rating, edited, id}).subscribe((data: Review) => {
          this.router.navigate(['/reviews']);
        })
      } else {
        this.error = 'You have already edited this review!';
      }
    } else {
      this.error = 'You must be logged in to edit a review';
    }
  }

}
