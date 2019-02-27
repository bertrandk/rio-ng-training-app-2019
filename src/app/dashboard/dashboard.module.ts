import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ListModule } from '../lib/list/list.module';
import { SubModuleModule } from './sub-module/sub-module.module';
import { DashboardChildComponent } from './components/dashboard-child/dashboard-child.component';
@NgModule({
  declarations: [DashboardComponent, DashboardChildComponent],
  imports: [CommonModule, DashboardRoutingModule, ListModule, SubModuleModule],
  exports: [DashboardComponent],
  entryComponents: [DashboardComponent]
})
export class DashboardModule {}
