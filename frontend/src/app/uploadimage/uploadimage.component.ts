import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../shared/user';
import { UserserviceService } from'../shared/userservice.service';

@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css']
})
export class UploadimageComponent implements OnInit {
  form:FormGroup;
  imageData:string;
  user:User;
  constructor(public userservice:UserserviceService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      name:new FormControl(null),
      image:new FormControl(null),
    });

  }
  onFileSelect(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedMimeTypes.includes(file.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  onSubmit() {
    this.userservice.addimage(this.form.value.name, this.form.value.image);
    this.form.reset();
    this.imageData = null;
  }
}


