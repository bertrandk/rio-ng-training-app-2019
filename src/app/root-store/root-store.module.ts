import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ProfileStoreModule } from './profile-store';
import { GamesStoreModule } from './games-store';
import { PlatformsStoreModule } from './platforms-store';
@NgModule({
  imports: [
    CommonModule,

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    ProfileStoreModule,
    GamesStoreModule,
    PlatformsStoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    })
  ],
  declarations: []
})
export class RootStoreModule {}
