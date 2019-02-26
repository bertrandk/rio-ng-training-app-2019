import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';

function confirmEmail(formGroup: FormGroup): Validators {
  const a = formGroup.get('email').value;
  const b = formGroup.get('confirmEmail').value;
  return a === b
    ? null
    : {
        confirmEmail: {
          message: `expected email and confirm email to match`,
          email: a,
          confirmEmail: b
        }
      };
}
@Component({
  selector: 'app-profile-edit-form',
  templateUrl: './profile-edit-form.component.html',
  styleUrls: ['./profile-edit-form.component.scss']
})
export class ProfileEditFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  form: FormGroup;
  ngOnInit() {
    this.form = this.fb.group(
      {
        id: [],
        image: [],
        languageId: [],
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        averageNumberOfHoursPerDay: ['', [Validators.required, Validators.min(0), Validators.max(24)]],
        email: [],
        confirmEmail: []
      },
      {
        validators: confirmEmail
      }
    );
  }
  public onSubmit() {
    console.log('proper');
  }
}
