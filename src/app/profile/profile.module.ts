import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileEditFormComponent } from './components/profile-edit-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrainingMaterialModule } from '../../training-material.module';

@NgModule({
  declarations: [ProfileEditFormComponent, ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    TrainingMaterialModule
  ],
  entryComponents: []
})
export class ProfileModule {}
