import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpComponent } from './help.component';

const routes: Routes = [
  { path: '', component: HelpComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
