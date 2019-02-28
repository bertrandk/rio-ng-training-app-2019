import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { gamesReducer } from './reducer';
import { GamesStoreEffects } from './effects';
@NgModule({
  imports: [CommonModule, StoreModule.forFeature('games', gamesReducer), EffectsModule.forFeature([GamesStoreEffects])]
})
export class GamesStoreModule {}
