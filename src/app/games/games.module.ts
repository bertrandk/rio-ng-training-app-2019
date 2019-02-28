import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GamesEditComponent } from './components/games-edit/games-edit.component';
import { GamesEditFormComponent } from './components/games-edit-form/games-edit-form.component';

import { TrainingMaterialModule } from 'src/training-material.module';

@NgModule({
  declarations: [
    GamesComponent,
    GamesListComponent,
    GamesEditComponent,
    GamesEditFormComponent
  ],
  imports: [CommonModule, GamesRoutingModule, TrainingMaterialModule]
})
export class GamesModule {}
