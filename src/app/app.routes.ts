
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'todo-list', loadChildren: './todo-list/todo-list.module#TodoListModule' },
  { path: 'news', loadChildren: './news/news.module#NewsModule' },
  { path: 'help', loadChildren: './help/help.module#HelpModule' },

  { path: '**',   redirectTo: '', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
