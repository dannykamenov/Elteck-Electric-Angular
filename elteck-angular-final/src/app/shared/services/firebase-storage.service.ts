import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable, from } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {
  constructor(private storage: AngularFireStorage) { }

  getImageUrls(): Observable<string[]> {
    const storageRef = this.storage.ref('gallery');
    return storageRef.listAll().pipe(
      switchMap(refs => {
        const downloadURLPromises = refs.items.map(itemRef => itemRef.getDownloadURL());
        return from(Promise.all(downloadURLPromises));
      })
    );
  }
}
