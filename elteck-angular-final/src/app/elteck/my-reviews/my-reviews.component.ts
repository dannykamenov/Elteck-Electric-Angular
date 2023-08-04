import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

    constructor(private api: ApiService, private router: Router) { 
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

    ownerChecker(uid: string | undefined) {
      if(uid === this.userId) {
        return true;
      } else {
        return false;
      }
    }

    deleteReview(id: string) {
      const agree = confirm('Are you sure you want to delete this review?');
      if(agree) {
        this.api.deleteReview(id).subscribe((res) => {
          //refresh page
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/reviews']);
          });
        });
      } else {
        return;
      }
    }

}
