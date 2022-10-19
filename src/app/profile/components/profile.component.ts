import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../auth/actions/auth-actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  
  @Input() units:any;

  unitsLFC = new FormControl('');


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
