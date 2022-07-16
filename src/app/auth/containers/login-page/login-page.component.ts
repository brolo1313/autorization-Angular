import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthActions } from '../../actions/auth-actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
  }


  public onLogin(data:any){
    console.log(data);
    this.store.dispatch(AuthActions.login(data))
  }
}
