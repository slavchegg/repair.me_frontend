import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { Settings } from '../settings';
import { AuthService } from '../auth.service';
import { AppComponent } from '../app.component';
import {UsersService} from '../users.service';

@Component({
  selector: 'plants-login',
  templateUrl: './login.component.html',
  styleUrls: ['../user-edit/form.css', './login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials = {username: '', password: ''}; // name is mail, sent to registration/login

  constructor(private as: AuthService, private us: UsersService, private router: Router, private title: Title,
  private ac: AppComponent) { }

  ngOnInit() {
    this.title.setTitle('Вход :: ' + Settings.title);
  }

  login(): void {
    this.as.login(this.credentials).subscribe((role: string) => {
      if (role !== 'guest') {
        this.router.navigate(['']);
        console.log(role);
        this.ac.nav.refreshRole();
      }
    });
  }
}
