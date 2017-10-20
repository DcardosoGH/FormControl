import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { routing } from './login.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,

    routing,
    SharedModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
