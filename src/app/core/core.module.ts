import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { RouterModule } from '@angular/router';
import { TrainingMaterialModule } from '../../training-material.module';

@NgModule({
  declarations: [SiteHeaderComponent],
  imports: [CommonModule, RouterModule, TrainingMaterialModule],
  exports: [SiteHeaderComponent]
})
export class CoreModule {}
