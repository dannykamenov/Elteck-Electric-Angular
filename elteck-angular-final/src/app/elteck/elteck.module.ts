import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { SharedModule } from '../shared/shared.module';
import { ReviewPageComponent } from './review-page/review-page.component';
import { PostReviewComponent } from './post-review/post-review.component';
import { RouterModule } from '@angular/router';
import { MyReviewsComponent } from './my-reviews/my-reviews.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    GalleryComponent,
    ReviewPageComponent,
    PostReviewComponent,
    MyReviewsComponent,
    NotFoundComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    GalleryComponent,
    ReviewPageComponent,
    PostReviewComponent,
    MyReviewsComponent,
    NotFoundComponent
  ]
})
export class ElteckModule { }
