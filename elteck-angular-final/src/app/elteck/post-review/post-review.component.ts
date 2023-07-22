import { Component } from '@angular/core';

@Component({
  selector: 'app-post-review',
  templateUrl: './post-review.component.html',
  styleUrls: ['./post-review.component.scss']
})
export class PostReviewComponent {
  stars = [1, 2, 3, 4, 5];
  rating = 0;

  mouseEnterHandler(index: number) {
    this.rating = index;
  }

  mouseLeaveHandler() {
    this.rating = 0;
  }

}
