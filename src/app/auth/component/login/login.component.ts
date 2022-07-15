import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public hide = true;

  public form = this.fb.group({
    tel : [null, [Validators.required]],
    pass: [null, [Validators.required, Validators.minLength(8)]]
  })

  get pass() {
    return this.form.get('pass') as FormControl;
} 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(form:any): void {
    console.log(form.value);
  }
}
