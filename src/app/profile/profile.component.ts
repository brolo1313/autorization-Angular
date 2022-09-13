import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ComponentCanDeactivate } from '../auth/exit.auth.guard';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, ComponentCanDeactivate {

  public title: string = '';
  saved: boolean = false;


  constructor(private route : Router, private titleService: Title) { }

  ngOnInit(): void {
    console.log(this.route);
  }

  canDeactivate(): boolean | Observable<boolean> {
    return this.saved ? true : confirm('Вы точно хотите покинуть страницу?')
  }
}
