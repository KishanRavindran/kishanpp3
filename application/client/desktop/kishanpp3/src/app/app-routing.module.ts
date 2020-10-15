import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { UserComponent } from './user/user.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';
import { TemplateComponent } from './template/template.component';
import { AdminComponent } from './admin/admin.component';
import { Screen453561Component } from './screen453561/screen453561.component';
import { Screen416851Component } from './screen416851/screen416851.component';
import { Screen468114Component } from './screen468114/screen468114.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'authorization', component: AuthorizationComponent },
{ path: 'usermanagement', component: UserComponent, canActivate: [AuthGuard] },
{ path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
  { path: '', component: TemplateComponent , pathMatch: 'full' },
{ path: 'screen453561', loadChildren: () => import('./screen453561/screen453561.module').then(mod => mod.Screen453561Module)},
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
{ path: 'screen416851', loadChildren: () => import('./screen416851/screen416851.module').then(mod => mod.Screen416851Module)},

{ path: 'screen468114', loadChildren: () => import('./screen468114/screen468114.module').then(mod => mod.Screen468114Module)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
