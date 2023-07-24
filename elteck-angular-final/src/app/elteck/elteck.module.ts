import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { SharedModule } from '../shared/shared.module';
import { ReviewPageComponent } from './review-page/review-page.component';
import { PostReviewComponent } from './post-review/post-review.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GalleryComponent,
    ReviewPageComponent,
    PostReviewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    GalleryComponent,
    ReviewPageComponent,
    PostReviewComponent
  ]
})
export class ElteckModule { }
