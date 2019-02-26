import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { ProfileDataService } from '../services/profile-data.service';
import { Store, select } from '@ngrx/store';
import { State } from '../..//store/reducers';
import { take, filter, tap } from 'rxjs/operators';
import { SaveProfile } from 'src/app/store/reducers/profile.reducer';

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
  constructor(private fb: FormBuilder, private profileData: ProfileDataService, private store$: Store<State>) {}
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
    this.store$
      .pipe(
        select(state => state.profile.current),
        filter(n => n.id !== null),
        tap(n => console.log(n))
      )
      .subscribe(n => {
        this.form.patchValue(n);
      });
  }
  public onSubmit() {
    if (this.form.valid) {
      this.store$.dispatch(new SaveProfile({ ...this.form.value }));
    }
  }
}
