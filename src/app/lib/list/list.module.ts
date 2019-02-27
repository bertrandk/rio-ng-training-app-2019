import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListContainerComponent } from './list-container/list-container.component';

@NgModule({
  declarations: [ListComponent, ListItemComponent, ListContainerComponent],
  exports: [ListComponent],
  imports: [CommonModule]
})
export class ListModule {}
