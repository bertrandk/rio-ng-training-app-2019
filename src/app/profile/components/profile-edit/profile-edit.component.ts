import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../../store/reducers';
import { Observable } from 'rxjs';
import { Profile } from '../../../models/profile.dto';
import { SaveProfile } from 'src/app/store/reducers/profile.reducer';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  constructor(private store$: Store<State>) {}
  profile$: Observable<Profile> = this.store$.pipe(select(n => n.profile.current));
  onSave(profile: Profile) {
    this.store$.dispatch(new SaveProfile(profile));
  }
  ngOnInit() {}
}
