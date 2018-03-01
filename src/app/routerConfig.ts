// routerConfig.ts

import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

export const appRoutes: Routes = [
  { path: 'form', 
    component: FormComponent 
  },
  {
      path: 'kiran',component: FormComponent
  }
];