import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { RootStoreState } from '../../root-store';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { selectFullName } from '../../root-store/profile-store/selectors';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {
  fullName$: Observable<any> = this.store$.pipe(selectFullName);

  navItems = [
    {
      label: 'Game Progression',
      ariaLabel: 'Game Progression',
      link: ['/']
    },
    {
      label: 'Games',
      ariaLabel: 'Games',
      link: ['/games']
    },
    {
      label: 'Dashboard',
      ariaLabel: 'Dashboard',
      link: ['/dashboard']
    }
  ];
  constructor(private store$: Store<RootStoreState.State>) {}

  ngOnInit() {}
}
