import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-edit-form',
  templateUrl: './profile-edit-form.component.html',
  styleUrls: ['./profile-edit-form.component.scss']
})
export class ProfileEditFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  form: FormGroup;
  ngOnInit() {
    this.form = this.fb.group({
      id: [],
      image: [],
      languageId: [],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      averageNumberOfHoursPerDay: [
        '',
        [Validators.required, Validators.min(0), Validators.max(24)]
      ]
    });
  }
  public onSubmit() {
    console.log('proper');
  }
}
