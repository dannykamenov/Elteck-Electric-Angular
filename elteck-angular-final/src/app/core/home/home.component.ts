import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { getReview } from 'src/app/shared/services/getReview';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  mouseOvered: boolean = false;
  mouseOvered1: boolean = false;
  mouseOvered2: boolean = false;
  mouseOvered3: boolean = false;
  mouseOvered4: boolean = false;
  mouseOvered5: boolean = false;

  reviews: undefined | getReview[];
  stars: undefined | number[] = [1, 2, 3, 4, 5];
  averageRating: undefined | number;

    constructor(private api: ApiService, private router: Router) { 
      this.api.getLatestReviews().subscribe((res) => {
        this.reviews = res;
      });
      this.api.getAverageRating().subscribe((res) => {
        this.averageRating = res.averageRating;
        if(this.averageRating) {
          this.averageRating = Math.round(this.averageRating*10)/10;
        }
      });
    }
}
