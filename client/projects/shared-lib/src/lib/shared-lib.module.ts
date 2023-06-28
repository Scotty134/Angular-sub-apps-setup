import { NgModule } from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';
import { SharedItemComponent } from './shared-item/shared-item.component';



@NgModule({
  declarations: [
    SharedLibComponent,
    SharedItemComponent
  ],
  imports: [
  ],
  exports: [
    SharedLibComponent,
    SharedItemComponent
  ]
})
export class SharedLibModule { }
