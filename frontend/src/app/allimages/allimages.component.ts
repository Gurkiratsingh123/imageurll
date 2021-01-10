import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../shared/user';
import { UserserviceService } from '../shared/userservice.service';

@Component({
  selector: 'app-allimages',
  templateUrl: './allimages.component.html',
  styleUrls: ['./allimages.component.css']
})
export class AllimagesComponent implements OnInit, OnDestroy {

  images: User[] = [];
  private imageSubscription: Subscription;

  constructor(private userservice: UserserviceService) {}

  ngOnInit(): void {
    this.userservice.getimages();
    this.imageSubscription = this.userservice
      .getimagesStream()
      .subscribe((images: User[]) => {
        this.images =images;
      });
  }

  ngOnDestroy() {
    this.imageSubscription.unsubscribe();
  }
}
