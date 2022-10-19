import { selectUnits } from './../selectors/profile.selector';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthActions } from '../../auth/actions/auth-actions';
import { ComponentCanDeactivate } from '../../auth/services/exit.auth.guard';
import { ProfileActions } from '../actions/profile.actions';

@Component({
  selector: 'app-profile-page',
  template: `<app-profile   [units]="units$ | async">
  </app-profile>`,
})
export class ProfilePageComponent implements OnInit {
  public units$ = this.store.pipe(select(selectUnits));

  constructor(
    private router: Router,
    private store: Store<any>,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(ProfileActions.getUnits());
  }

}
