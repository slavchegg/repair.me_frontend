import { Component, OnInit } from '@angular/core';
import {Service} from '../service';
import {Settings} from '../settings';
import { Title } from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {ServiceService} from '../service.service';


@Component({
  selector: 'plants-service-registration',
  templateUrl: './service-registration.component.html',
  styleUrls: ['./form.css', './service-registration.component.css']
})
export class ServiceRegistrationComponent implements OnInit {
  service: Service;
  constructor(private route: ActivatedRoute, private ss: ServiceService,
              private router: Router, private title: Title) { }

  ngOnInit() {
    this.service = new Service();
    this.title.setTitle('Регистрация сервиса' + Settings.title);
  }

  private submitService(): void {
    this.ss.setService(this.service).subscribe(response => {
      if (response['_body'] === 'Successful') {
        this.router.navigate(['/services']);
      }
    });
  }
}
