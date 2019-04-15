import { Component, OnInit } from '@angular/core';
import {Car} from '../car';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {CarsService} from '../cars.service';
import {Settings} from '../settings';

@Component({
  selector: 'plants-car-registration',
  templateUrl: './car-registration.component.html',
  styleUrls: ['./form.css', './car-registration.component.css']
})
export class CarRegistrationComponent implements OnInit {
  car: Car;
  carNames: string[];
  carModels: string[];
  carModifications: string[];

  constructor(private route: ActivatedRoute, private cs: CarsService,
              private router: Router, private title: Title) {
  }

  ngOnInit() {
    this.car = new Car();
    this.title.setTitle('Регистрация машины' + Settings.title);
    this.cs.getMakes().subscribe(data => {
      this.carNames = JSON.parse(data.text());
    });
  }

  private submitCar(): void {
    this.cs.setCar(this.car).subscribe(response => {
      if (response['_body'] === 'Successful') {
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
