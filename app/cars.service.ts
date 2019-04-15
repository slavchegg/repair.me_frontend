import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions } from '@angular/http';

import {Car} from './car';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class CarsService {
  cars: string = '';
  constructor(private http: Http) { }
  setCar(car: Car): any {
    const body = new URLSearchParams();
    body.set('model', car.model);
    body.set('modification', car.modification);
    body.set('vin', car.vin.toString());
    return this.http.post('http://localhost:8080/registration/newCar', body); // .map((r: Response) => r.json());
  }

  setCars(cars: string[]): any {
    this.cars = '';
    const body = new URLSearchParams();
    for (let i = 0; i < cars.length; i++) {
      this.cars = this.cars.concat(cars[i]).concat(',').toString();
    }
    this.cars = this.cars.substring(0, this.cars.length - 1);
    body.set('makes', this.cars);
    // body.set('makes', cars[0]);
    return this.http.get('http://localhost:8080/registration/regModifications?makes=' + this.cars); // .map((r: Response) => r.json());
  }

  getMakes() {
    return this.http.get('http://localhost:8080/getAllMakes');
  }

  getModels(make: string) {
    const params = new URLSearchParams();
    params.set('makeName', make);
    const options = new RequestOptions({ params: params });
    return this.http.get('http://localhost:8080/getAllModels', options);
  }

  getModifications(model: string) {
    const params = new URLSearchParams();
    params.set('modelName', model);
    const options = new RequestOptions({ params: params });
    return this.http.get('http://localhost:8080/getAllModifications', options);
  }

  getUserCars(): Observable<Car[]> {
    return this.http.get('http://localhost:8080/user/getCars').map((r: Response) => r.json())
      .catch((err, caught) => Observable.of([]));
  }
}
