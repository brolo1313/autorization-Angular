import { StoreModule } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProfileComponent } from '../profile/components/profile.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProfilePageComponent } from '../profile/containers/profile-page.component';
import { ProfileReducer } from './reducers/profile.reducers';
import { ProfileEffect } from './effects/profile.effects';
import { MatSelectModule } from '@angular/material/select';



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
    StoreModule.forFeature('profile', ProfileReducer, {}),
    EffectsModule.forFeature([ProfileEffect]),
  ],
  declarations: [],
  providers: [
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProfileModule { }