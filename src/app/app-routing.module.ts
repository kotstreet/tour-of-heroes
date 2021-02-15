import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { NotAuthGuard } from './notauth.guard';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeroFilterSearchComponent } from './hero-filter-search/hero-filter-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard] },
  { path: 'detail/:id', component: HeroDetailsComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard] },
  { path: 'filter', component: HeroFilterSearchComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard] },

  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard], canActivateChild: [NotAuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [NotAuthGuard], canActivateChild: [NotAuthGuard] },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
  ],
  providers: [
    AuthGuard,
    NotAuthGuard,
  ],
})
export class AppRoutingModule { }
