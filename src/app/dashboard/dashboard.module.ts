import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ListModule } from '../lib/list/list.module';
@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, ListModule],
  exports: [DashboardComponent],
  entryComponents: [DashboardComponent]
})
export class DashboardModule {}
