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

  constructor(private api: ApiService, public router: Router) { 
    this.api.getReview(this.router.url.split('/')[2]).subscribe((data: Review) => {
      this.rating = data.rating;
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

  editReview(title: string, description: string) {

  }

}
