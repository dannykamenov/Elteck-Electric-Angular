import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { ApiService } from 'src/app/shared/services/api.service';
import { getReview } from 'src/app/shared/services/getReview';

@Component({
  selector: 'app-my-reviews',
  templateUrl: './my-reviews.component.html',
  styleUrls: ['./my-reviews.component.scss']
})
export class MyReviewsComponent {
  isLoading = true;
  isNotLoading = false;
  reviews: undefined | getReview[];
  stars: undefined | number[] = [1, 2, 3, 4, 5];

    constructor(private api: ApiService, private router: Router) { 
      const auth = getAuth();
      const uid = auth.currentUser?.uid;
      this.api.getMyReviews(uid).subscribe((res) => {
        this.reviews = res;
        this.isLoading = false;
        this.isNotLoading = true;
        console.log(res);
      });
    }
}
