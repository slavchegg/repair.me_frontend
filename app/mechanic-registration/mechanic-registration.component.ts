import { Component, OnInit } from '@angular/core';
import {Mechanic} from '../mechanic';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../users.service';
import {Title} from '@angular/platform-browser';
import {Settings} from '../settings';
import {Observable} from 'rxjs/Observable';
import {Service} from '../service';
import {ServiceService} from '../service.service';

@Component({
  selector: 'plants-mechanic-registration',
  templateUrl: './mechanic-registration.component.html',
  styleUrls: ['./form.css', './mechanic-registration.component.css']
})
export class MechanicRegistrationComponent implements OnInit {
  mechanic: Mechanic;
  services: Observable<Service[]>;
  errorMessage: String = ' ';

  constructor(private route: ActivatedRoute, private us: UsersService,
              private router: Router, private title: Title, private ss: ServiceService) { }

  ngOnInit() {
    this.mechanic = new Mechanic();
    this.services = this.ss.getServices();
    this.title.setTitle('Регистрация' + Settings.title);
  }

  private submitMechanic(): void {
    if (this.checkMail()) {
      this.us.setMechanic(this.mechanic).subscribe(response => {
        console.log(response['_body']);
        if (response['_body'] === 'Successful registered') {
          this.errorMessage = ' ';
          this.router.navigate(['/auth/login']);
        }else this.errorMessage = response['_body'];
      });
    }else this.errorMessage = 'no valid mail' ;
  }


  checkMail() {
    return this.mechanic.mail.includes('@') && (this.mechanic.mail.includes('.ru') || this.mechanic.mail.includes('.com'));
  }


}
