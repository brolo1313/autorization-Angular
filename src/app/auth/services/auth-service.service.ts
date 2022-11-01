import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  public login(data:any){
    return this.http.post(`${environment.apiUrl}/system/common/tokens/auth`, data );
  }

  public FetchDepartments(){
    return this.http.get(`${environment.apiUrl}/organization/structure/units`);
  }
}
