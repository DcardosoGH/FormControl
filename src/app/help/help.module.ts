import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './help.routes';
import { SharedModule } from '../shared/shared.module';

import { HelpComponent } from './help.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    routing,
    SharedModule
  ],
  declarations: [HelpComponent]
})
export class HelpModule { }
