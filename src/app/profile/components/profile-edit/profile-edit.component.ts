import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Profile } from '../../../models/profile.dto';
import { RootStoreState, ProfileStoreActions } from '../../../root-store';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  constructor(private store$: Store<RootStoreState.State>) {}
  profile$: Observable<Profile> = this.store$.pipe(select(n => n.profile.current));
  onSave(profile: Profile) {
    this.store$.dispatch(new ProfileStoreActions.SaveProfile(profile));
  }
  ngOnInit() {}
}
