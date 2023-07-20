import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseStorageService } from 'src/app/shared/services/firebase-storage.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  isLoading = true;
  imageUrls$: Observable<string[]>;

  constructor(private storageService: FirebaseStorageService) {
    this.imageUrls$ = this.storageService.getImageUrls();
    this.imageUrls$.subscribe(() => {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    });
  }
}
