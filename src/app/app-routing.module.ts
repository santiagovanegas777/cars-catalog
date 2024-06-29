import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: `home`,
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: `contact`,
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: `detail-cars`,
    loadChildren: () => import('./pages/detail-cars/detail-cars.module').then(m => m.DetailCarsModule)
  },
  {
    path: `list-cars`,
    loadChildren: () => import('./pages/list-cars/list-cars.module').then(m => m.ListCarsModule)
  },
  {
    path: `login`,
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: `register`,
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
