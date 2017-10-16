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
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

import todoListReducer from './../state/todo-list/todo-list.reducer';
import { TodoListEffects } from './../state/todo-list/todo-list.effects';
import UIReducer from './../state/UI/UI.reducer';
import formReducer from './../state/form/form.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    routing,
    HomeModule,
    SharedModule,

    StoreModule.forRoot({
      todoListStore: todoListReducer,
      UIStore: UIReducer,
      formStore: formReducer
    }),
    EffectsModule.forRoot([TodoListEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
