import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { getReview } from 'src/app/shared/services/getReview';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss']
})
export class ReviewPageComponent {
  reviews: undefined | getReview[];

    constructor(private api: ApiService) { 
      this.api.getReviews().subscribe((res) => {
        this.reviews = res;
        console.log(this.reviews)
      });
    }
}
