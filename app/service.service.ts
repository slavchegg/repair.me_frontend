import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import {Service} from './service';

@Injectable()
export class ServiceService {

  constructor(private http: Http) { }
  getServices(): Observable<Service[]> {
    return this.http.get('http://localhost:8080/service/getAll').map((r: Response) => r.json())
      .catch((err, caught) => Observable.of([]));
  }
  getService(name: string ) {
    const params = new URLSearchParams();
    params.set('name', name);
    const options = new RequestOptions({ params: params });
    return this.http.get('http://localhost:8080/service/getOne', options);
  }

  setService(service: Service): any {
    const body = new URLSearchParams();
    body.set('city', 'Санкт-Петербург');
    body.set('street', 'Жукова');
    body.set('house', '58');
    body.set('name', service.name);
    body.set('content', service.about);
    body.set('href', service.href);
    body.set('phone', service.phone);
    body.set('hours', service.hours);
    body.set('photoHref', service.photoHref);
    return this.http.post('http://localhost:8080/registration/newService', body); // .map((r: Response) => r.json());
  }

}
