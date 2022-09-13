import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public title: string = '';

  constructor(private route : Router, private titleService: Title) { }

  ngOnInit(): void {
    console.log(this.route);
  }

}
