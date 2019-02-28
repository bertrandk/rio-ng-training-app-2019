import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { ProfileDataService } from '../../services/profile-data.service';
import { Store, select } from '@ngrx/store';

import { take, filter, tap } from 'rxjs/operators';

import { Profile } from '../../../models/profile.dto';
import { RootStoreState } from '../../../root-store';

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
export class ProfileEditFormComponent implements OnInit, OnChanges {
  @Input() profile: Profile;
  @Output() save: EventEmitter<Profile> = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder, private profileData: ProfileDataService, private store$: Store<RootStoreState.State>) {
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
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form.patchValue(changes.profile.currentValue);
  }

  ngOnInit() {}

  public onSubmit() {
    if (this.form.valid) {
      this.save.emit(this.form.value);
    }
  }
}
