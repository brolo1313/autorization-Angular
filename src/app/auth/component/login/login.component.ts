import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() loginEmmiter = new EventEmitter();

  public hide = true;

  public form = this.fb.group({
    login : [null, [Validators.required]],
    password: [null, [Validators.required, Validators.minLength(8)]]
  })

  get pass() {
    return this.form.get('password') as UntypedFormControl;
} 

  constructor(private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(form:any): void {
    if(form.valid) {
    const data = form.value;
    this.loginEmmiter.emit(data)
    }
  }
}
