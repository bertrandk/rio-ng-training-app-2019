import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { platformReducer } from './reducer';
import { PlatformsStoreEffects } from './effects';
@NgModule({
  providers: [],
  imports: [CommonModule, StoreModule.forFeature('platforms', platformReducer), EffectsModule.forFeature([PlatformsStoreEffects])]
})
export class PlatformsStoreModule {}
