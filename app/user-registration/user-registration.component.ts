import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

import { Settings } from '../settings';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'plants-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./form.css', './user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  user: User;

  errorMessage: String = ' ' ;

  constructor(private route: ActivatedRoute, private us: UsersService,
  private router: Router, private title: Title) { }

  ngOnInit() {
  	this.user = new User();
    this.title.setTitle('Регистрация' + Settings.title);
    // this.getTest();
  }

  private submitUser(): void {
    if (this.checkMail()) {
      this.us.setUser(this.user).subscribe(response => {
        console.log(response['_body']);
        if (response['_body'] === 'Successful registered') {
          this.errorMessage = ' ';
          this.router.navigate(['/auth/login']);
        }
        else { this.errorMessage = 'This mail has already registered' ;
        }
      });
    }else this.errorMessage = 'No valid mail';
  }


  checkMail() {
    return this.user.mail.includes('@') && (this.user.mail.includes('.ru') || this.user.mail.includes('.com'));
  }



  // login(): void {
  //   this.us.login(this.credentials).subscribe(response => {
  //     console.log(response['message']);
  //   });
  // }
}
