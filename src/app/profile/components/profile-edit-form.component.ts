import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { ProfileDataService } from '../services/profile-data.service';
/*
export interface Profile {
  id: number;
  image: string;
  languageId: number;
  firstName: string;
  lastName: string;
  averageNumberOfHoursPerDay: number;
  email: string;
  phoneNumbers: string[];
}
1. create the rest of the form for the fields
2. can have more than 1 phone number - can just be an input box
3. create confirm email field
4. implement the ProfileData service
5. Load from the api
6. save results if valid
7. ensure that confirmEmail is not sent to the server
*/
@Component({
  selector: 'app-profile-edit-form',
  templateUrl: './profile-edit-form.component.html',
  styleUrls: ['./profile-edit-form.component.scss']
})
export class ProfileEditFormComponent implements OnInit {
  constructor(private fb: FormBuilder, private profileData: ProfileDataService) {}
  form: FormGroup;
  ngOnInit() {
    this.form = this.fb.group({
      id: [],
      image: [],
      languageId: [],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]]
    });
    // load profile
  }
  public onSubmit() {
    if (this.form.valid) {
      // save propfile
    }
  }
}
