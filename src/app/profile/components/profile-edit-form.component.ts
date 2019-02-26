import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { ProfileDataService } from '../services/profile-data.service';

function confirmFields(fieldA: string, fieldB: string) {
  return function compare(formGroup: FormGroup): Validators {
    const a = formGroup.get(fieldA).value;
    const b = formGroup.get(fieldB).value;
    return a === b
      ? null
      : {
          confirmFields: {
            message: `Expected fields ${fieldA} and ${fieldB} to match`,
            [fieldA]: a,
            [fieldB]: b
          }
        };
  };
}
@Component({
  selector: 'app-profile-edit-form',
  templateUrl: './profile-edit-form.component.html',
  styleUrls: ['./profile-edit-form.component.scss']
})
export class ProfileEditFormComponent implements OnInit {
  constructor(private fb: FormBuilder, private profileData: ProfileDataService) {}
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
        email: ['', Validators.required],
        confirmEmail: ['', Validators.required]
      },
      {
        validators: confirmFields('email', 'confirmEmail')
      }
    );
    this.profileData.get().subscribe(n => {
      this.form.reset(n);
    });
  }
  public onSubmit() {
    if (this.form.valid) {
      this.profileData.put(this.form.value).subscribe(n => {
        console.log(`Saved!`, { ...n });
      });
    }
  }
}
