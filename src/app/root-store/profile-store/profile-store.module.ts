import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { profileReducer } from './reducer';
import { ProfileStoreEffects } from './effects';
@NgModule({
  imports: [CommonModule, StoreModule.forFeature('profile', profileReducer), EffectsModule.forFeature([ProfileStoreEffects])]
})
export class ProfileStoreModule {}
