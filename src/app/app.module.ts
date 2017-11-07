import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routes';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';

import todoListReducer from './../state/todo-list/todo-list.reducer';
import { TodoListEffects } from './../state/todo-list/todo-list.effects';
import { UserEffects } from './../state/User/User.effects';
import UIReducer from './../state/UI/UI.reducer';
import formReducer from './../state/form/form.reducer';
import UserReducer from './../state/user/user.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    routing,
    LoginModule,
    SharedModule,

    StoreModule.forRoot({
      todoListStore: todoListReducer,
      UIStore: UIReducer,
      aboutFormStore: formReducer,
      UserStore: UserReducer
    }),
    EffectsModule.forRoot([TodoListEffects, UserEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
