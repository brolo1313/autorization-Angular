import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthActions } from '../../auth/actions/auth-actions';
import { ComponentCanDeactivate } from '../../auth/services/exit.auth.guard';
import { ProfileActions } from '../actions/profile.actions';

@Component({
  selector: 'app-profile-page',
  template: `<app-profile >
  </app-profile>`,
})
export class ProfilePageComponent implements OnInit {


  constructor(
    private router: Router,
    private store: Store<any>,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(ProfileActions.getUnits());
  }

}
