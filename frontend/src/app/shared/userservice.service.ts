import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private image: User[] = [];
  private images$ = new Subject<User[]>();
  readonly url = "http://localhost:3000/api/userroute";

  constructor(private http: HttpClient) {}

  getimages() {
    this.http
      .get<{ images: User[] }>(this.url)
      .pipe(
        map((profileData) => {
          return profileData.images;
        })
      )
      .subscribe((profiles) => {
        this.image = profiles;
        this.images$.next(this.image);
      });
  }

  getimagesStream() {
    return this.images$.asObservable();
  }

   addimage(name: string, image: File): void {
     const profileData = new FormData();
    
    profileData.append("image", image, name);
    this.http
      .post<{ profile: User }>(this.url, profileData)
      .subscribe((profileData) => {
        const profile: User = {
          imagePath: profileData.profile.imagePath,
        };
        this.image.push(profile);
        this.images$.next(this.image);
      });
  }
}

