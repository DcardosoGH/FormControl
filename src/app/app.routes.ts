import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'todo-list', loadChildren: './todo-list/todo-list.module#TodoListModule' },
  { path: 'graph', loadChildren: './graph/graph.module#GraphModule' },

  { path: '**',   redirectTo: '', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
