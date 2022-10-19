import { AuthEffect } from './effects/auth.effects';
import { AuthGuard } from './services/auth.guard';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { ProfileComponent } from '../profile/components/profile.component';
import { authReducers } from './reducers/auth.reducers';
import { AuthService } from './services/auth-service.service';
import { LoginComponent } from './component/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProfilePageComponent } from '../profile/containers/profile-page.component';
import { MatSelectModule } from '@angular/material/select';


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginPageComponent },
    { path: 'profile', component: ProfilePageComponent, title: 'profile', canActivate: [AuthGuard], },
  ];
  

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', authReducers, {}),
    EffectsModule.forFeature([AuthEffect]),
  ],
  declarations: [LoginComponent, LoginPageComponent, ProfileComponent, ProfilePageComponent],
  providers: [
    AuthService,
    AuthGuard,
  ]
})
export class AuthModule { }