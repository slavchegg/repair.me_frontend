import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

import { Settings } from '../settings';
import { RequestsService } from '../requests.service';
import { Rrequest } from '../rrequest';
import {Car} from '../car';
import {CarsService} from '../cars.service';

@Component({
  selector: 'plants-request-make',
  templateUrl: './request-make.component.html',
  styleUrls: ['./form.css', './request-make.component.css']
})
export class RequestMakeComponent implements OnInit {
  car: Car;
  carNames: string[];
  carModels: string[];
  carModifications: string[];
  request: Rrequest;

  constructor(private route: ActivatedRoute, private cs: CarsService,
              private router: Router, private title: Title, private rs: RequestsService) {
  }

  ngOnInit() {
    this.car = new Car();
    this.request = new Rrequest();
    this.title.setTitle('Регистрация машины' + Settings.title);
    this.cs.getMakes().subscribe(data => {
      this.carNames = JSON.parse(data.text());
    });
  }

  private submitRequest(): void {
    this.request.car = this.car;
    this.rs.setRequest(this.request).subscribe(response => {
      if (response.status === 200) {
        this.router.navigate(['/']);
      }
    });
  }

  private getModels() {
    this.cs.getModels(this.car.make).subscribe(data => {
      this.carModels = JSON.parse(data.text());
    });
  }

  private getModifications() {
    this.cs.getModifications(this.car.model).subscribe(data => {
      this.carModifications = JSON.parse(data.text());
    });
  }
}
