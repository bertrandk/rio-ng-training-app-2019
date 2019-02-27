import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubComponentOneComponent } from './sub-component-one/sub-component-one.component';
import { SubComponentTwoComponent } from './sub-component-two/sub-component-two.component';
import { ListModule } from 'src/app/lib/list/list.module';

@NgModule({
  declarations: [SubComponentOneComponent, SubComponentTwoComponent],
  exports: [SubComponentOneComponent, SubComponentTwoComponent],
  // imports: [CommonModule, ListModule]
  imports: [CommonModule]
})
export class SubModuleModule {}
