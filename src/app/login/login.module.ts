import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { routing } from './login.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,

    routing,
    RouterModule,

    SharedModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
