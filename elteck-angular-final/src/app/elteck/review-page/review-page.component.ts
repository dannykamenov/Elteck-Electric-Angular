import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

    constructor(private api: ApiService, private router: Router) { 
      this.api.getReviews().subscribe((res) => {
        this.reviews = res;
        this.isNotLoading = true;
        setTimeout(() => {this.isLoading = false}, 1000);
      });
    }
}
