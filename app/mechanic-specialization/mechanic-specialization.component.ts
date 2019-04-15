import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CarsService} from '../cars.service';
import {Title} from '@angular/platform-browser';
import {Settings} from '../settings';

@Component({
  selector: 'plants-mechanic-specialization',
  templateUrl: './mechanic-specialization.component.html',
  styleUrls: ['./form.css', './mechanic-specialization.component.css']
})
export class MechanicSpecializationComponent implements OnInit {
  carNames: string[];
  selectedCars: string[];
  constructor(private route: ActivatedRoute, private cs: CarsService,
              private router: Router, private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Регистрация специализации' + Settings.title);
    this.cs.getMakes().subscribe(data => {
      this.carNames = JSON.parse(data.text());
    });
  }

  private submitCars(): void {
    console.log(this.selectedCars);
    this.cs.setCars(this.selectedCars).subscribe(response => {
      if (response['_body'] === 'Successful') {
        this.router.navigate(['/']);
      }
    });
  }
}
