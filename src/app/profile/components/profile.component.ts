import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../auth/actions/auth-actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  

  constructor(
    private router: Router,
    private store: Store<any>,
  ) {}

  ngOnInit(): void {
  }


  public LogOut() {
    this.store.dispatch(AuthActions.logout());
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  public test(){
    console.log('foo');
  }
}
