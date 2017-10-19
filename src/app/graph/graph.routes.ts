import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraphComponent } from './graph.component';

const routes: Routes = [
  { path: '', component: GraphComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
