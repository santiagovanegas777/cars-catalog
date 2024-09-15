import { DeleteCarsModule } from './pages/delete-cars/delete-cars.module';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.guard';
import { NotFoundComponentComponent } from './pages/not-found-component/not-found-component.component';
import { AuthAdmin } from './services/admin.guard';

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
    path: `detail-cars/:id`,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/detail-cars/detail-cars.module').then(m => m.DetailCarsModule)
  },
  {
    path: `login`,
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: `register`,
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: `cars`,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/cars/cars.module').then(m => m.CarsModule)
  },
  {
    path: `profile`,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: `updateprofile`,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/updateprofile/updateprofile.module').then(m => m.UpdateprofileModule)
  },
  {
    path: `removeprofile`,
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/deleteprofile/deleteprofile.module').then(m => m.DeleteprofileModule)
  },
  {
    path: `createdcars`,
    canActivate: [AuthAdmin],
    loadChildren: () => import('./pages/createdcars/createdcars.module').then(m => m.CreatedcarsModule)
  },
  {
    path: `deletecars/:id`,
    canActivate: [AuthAdmin],
    loadChildren: () => import('./pages/delete-cars/delete-cars.module').then(m =>m.DeleteCarsModule)
  },
  {
    path: `updatecar/:id`,
    canActivate: [AuthAdmin],
    loadChildren: () => import('./pages/updated-car/updated-car.module').then(m =>m.UpdatedCarModule)
  },
  {
    path: `get-all-users`,
    canActivate: [AuthAdmin],
    loadChildren: () => import('./pages/get-all-users/get-all-users.module').then(m =>m.GetAllUsersModule)
  },
  {
    path:`filter-car/:cocheName`,
    canActivate:[AuthGuard],
    loadChildren: ()=> import('./pages/filter-car/filter-car.module').then(m =>m.FilterCarModule)
  },

  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'404', component: NotFoundComponentComponent},
  {path:'**', redirectTo: '/404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
