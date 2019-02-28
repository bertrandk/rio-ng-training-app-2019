import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { RootStoreState } from '../../root-store';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {
  fullName$: Observable<string> = this.store$.pipe(
    select(n => n.profile.current),
    filter(n => !!n),
    map(({ firstName, lastName }) => `${firstName} ${lastName}`)
  );
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
