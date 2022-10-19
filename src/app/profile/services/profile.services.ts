import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }



  public FetchDepartments(){
    return this.http.get(`${'https://portal-api-test.epicentrk.ua/api'}/organization/structure/units`);
  }
}
