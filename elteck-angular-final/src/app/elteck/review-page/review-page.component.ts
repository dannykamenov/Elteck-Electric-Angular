import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { ApiService } from 'src/app/shared/services/api.service';
import { getReview } from 'src/app/shared/services/getReview';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss']
})
export class ReviewPageComponent {
  isLoading = true;
  isNotLoading = false;
  reviews: undefined | getReview[];
  stars: undefined | number[] = [1, 2, 3, 4, 5];
  currentUserId: string | undefined;

    constructor(private api: ApiService, private router: Router) { 
      this.api.getReviews().subscribe((res) => {
        this.reviews = res;
        this.isNotLoading = true;
        setTimeout(() => {this.isLoading = false}, 1000);
        const auth = getAuth();
        this.currentUserId = auth.currentUser?.uid;
      });
    }

    ownerChecker(uid: string | undefined) {
      if(uid === this.currentUserId) {
        return true;
      } else {
        return false;
      }
    }

    deleteReview(id: string) {
      this.api.deleteReview(id).subscribe((res) => {
        //refresh page
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/reviews']);
        });
      });
    }
}
