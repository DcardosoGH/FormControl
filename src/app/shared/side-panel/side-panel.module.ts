import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidePanelComponent } from './side-panel.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [SidePanelComponent],
  exports: [SidePanelComponent]
})
export class SidePanelModule { }
