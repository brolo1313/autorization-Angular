import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  public login(data:any){
    return this.http.post(`${'https://portal-api-test.epicentrk.ua/api'}/system/common/tokens/auth`, data );
  }
}
