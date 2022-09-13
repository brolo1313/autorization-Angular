import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthActions } from '../auth/actions/auth-actions';
import { ComponentCanDeactivate } from '../auth/exit.auth.guard';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, ComponentCanDeactivate {
  public title: string = '';
  saved: boolean = false;

  constructor(
    private route: Router,
    private router: Router,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    console.log(this.route);
  }

  canDeactivate(): boolean | Observable<boolean> {
    return this.saved ? true : confirm('Вы точно хотите покинуть страницу?');
  }

  public LogOut() {
    this.store.dispatch(AuthActions.logout());
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
