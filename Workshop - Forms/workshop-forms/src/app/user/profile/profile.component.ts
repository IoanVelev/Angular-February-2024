import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { ProfileDetails } from 'src/app/types/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
isEditBtnClicked: boolean = false;

profileDetails: ProfileDetails = {
  username: 'Johny',
  email: 'john.doe@gmail.com',
  tel: '885 888 888'
};

form = this.fb.group({
  username: ['', [Validators.required, Validators.minLength(5)]],
  email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
  tel: ['', Validators.required]
})

constructor(private fb: FormBuilder){}

onToggle(): void {
  this.isEditBtnClicked = !this.isEditBtnClicked;
}


saveProfileHandler(): void {
  
  if (this.form.invalid) {
    return;
  }

  this.profileDetails = this.form.value as ProfileDetails;
  this.onToggle();
}

onCancelClick(): void {
  this.onToggle();
}
}
