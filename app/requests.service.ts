import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { Settings } from './settings';
import { Rrequest } from './rrequest';

@Injectable()
export class RequestsService {

  constructor(private http: Http) { }

  setRequest(request: Rrequest): any {
    const body = new URLSearchParams();
    body.set('modification', request.car.modification);
    body.set('content', request.content + '\n Телефон:' + request.vin);
    return this.http.post('http://localhost:8080/message/guestRequest', body).map((r: Response) => r.json());
  }

  getGeneralRequests(): Observable<Rrequest[]> {
    return this.http.get('http://localhost:8080/mechanic/readGeneralRequests').map((r: Response) => r.json())
    .catch((err, caught) => Observable.of([]));
  }

  getExactRequests(): Observable<Rrequest[]> {
    return this.http.get('http://localhost:8080/mechanic/readPrivateRequests').map((r: Response) => r.json())
      .catch((err, caught) => Observable.of([]));
  }

  setUserRequest(request: Rrequest): any {
    const body = new URLSearchParams();
    body.set('vin', request.car.vin.toString());
    body.set('content', request.content);
    return this.http.post('http://localhost:8080/message/request', body).map((r: Response) => r.json());
  }
  setUserRequestFromService(request: Rrequest): any {
    const body = new URLSearchParams();
    body.set('vin', request.car.vin.toString());
    body.set('content', request.content);
    body.set('serviceName', sessionStorage.getItem('serviceName'));
    sessionStorage.setItem('serviceName', '');
    return this.http.post('http://localhost:8080/message/forService', body).map((r: Response) => r.json());
  }
  setUserRequestFromMechanic(request: Rrequest): any {
    const body = new URLSearchParams();
    body.set('vin', request.car.vin.toString());
    body.set('content', request.content);
    body.set('mechanicId', sessionStorage.getItem('mechanicId'));
    sessionStorage.setItem('serviceName', '');
    return this.http.post('http://localhost:8080/message/forMechanic', body).map((r: Response) => r.json());
  }

  acceptExactRequest(id: string, decision: string): any {
    const params = new URLSearchParams();
    params.set('requestId', id);
    params.set('decision', decision);
    const options = new RequestOptions({ params: params });
    return this.http.get('http://localhost:8080/mechanic/acceptExactRequest', options).map((r: Response) => r.json());
  }

  acceptGeneralRequest(id: string, decision: string): any {
    const params = new URLSearchParams();
    params.set('requestId', id);
    params.set('decision', decision);
    const options = new RequestOptions({ params: params });
    return this.http.get('http://localhost:8080/mechanic/acceptRequest', options).map((r: Response) => r.json());
  }
}
