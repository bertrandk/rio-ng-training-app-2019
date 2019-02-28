import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileEditFormComponent, CurrencyMaskDirective } from './components/profile-edit-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrainingMaterialModule } from '../../training-material.module';

@NgModule({
  declarations: [ProfileEditFormComponent, ProfileComponent, CurrencyMaskDirective],
  providers: [CurrencyPipe],
  imports: [CommonModule, ProfileRoutingModule, ReactiveFormsModule, TrainingMaterialModule],
  entryComponents: []
})
export class ProfileModule {}
