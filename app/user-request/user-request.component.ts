import {Component, OnDestroy, OnInit} from '@angular/core';
import {CarsService} from '../cars.service';
import {Observable} from 'rxjs/Observable';
import {Car} from '../car';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {RequestsService} from '../requests.service';
import {Rrequest} from '../rrequest';

@Component({
  selector: 'plants-user-request',
  templateUrl: './user-request.component.html',
  styleUrls: ['./form.css', './user-request.component.css']
})
export class UserRequestComponent implements OnInit, OnDestroy{
  cars: Car[];
  car: Car;
  request: Rrequest;
  constructor(private route: ActivatedRoute, private cs: CarsService,
              private router: Router, private title: Title, private rs: RequestsService) { }
  ngOnInit() {
    this.cs.getUserCars().subscribe(data => {
      console.log(data);
      this.cars = data;
    });
    this.request = new Rrequest();
    this.request.car = new Car();
  }

  ngOnDestroy() {
    sessionStorage.setItem('redirect', 'fromMenu');
    sessionStorage.setItem('serviceName', '');
    sessionStorage.setItem('mechanicId', '');
  }
  private submitRequest(): void {
    if (sessionStorage.getItem('redirect') === 'fromMenu') {
      this.rs.setUserRequest(this.request).subscribe(response => {
        if (response.status === 200) {
          this.router.navigate(['/']);
        }
      });
    }
    if (sessionStorage.getItem('redirect') === 'fromService') {
      this.rs.setUserRequestFromService(this.request).subscribe(response => {
        if (response.status === 200) {
          this.router.navigate(['/']);
        }
      });
    }
    if (sessionStorage.getItem('redirect') === 'fromMechanic') {
      this.rs.setUserRequestFromMechanic(this.request).subscribe(response => {
        if (response.status === 200) {
          this.router.navigate(['/']);
        }
      });
    }
  }

}
