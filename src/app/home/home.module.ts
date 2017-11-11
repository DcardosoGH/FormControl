import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { routing } from './home.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,

    routing,
    SharedModule,
    FormsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
