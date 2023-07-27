import { Component } from '@angular/core';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
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
  reviews: getReview[] | undefined;
  stars: undefined | number[] = [1, 2, 3, 4, 5];
  userId: string | undefined;
  noReviews: boolean = false;

    constructor(private api: ApiService) { 
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.userId = user.uid;
          this.api.getMyReviews(this.userId).subscribe((res) => {
            if(res.length === 0) {
              this.noReviews = true;
            }
            this.reviews = res;
            this.isNotLoading = true;
            setTimeout(() => {this.isLoading = false}, 1000);
          });
        }
      });
    }

}
