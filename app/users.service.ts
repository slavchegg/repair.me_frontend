import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { User } from './user';
import {Mechanic} from './mechanic';

@Injectable()
export class UsersService {
  constructor(private http: Http) { }

  getUsers(): Observable<User[]> {
    return this.http.get('php/users_get.php').map((r: Response) => r.json())
    .catch((err, caught) => Observable.of([]));
  }

  getUser(id: string): Observable<User> {
    const params = new URLSearchParams();
    params.set('id', id);
    const options = new RequestOptions({ params: params });
    return this.http.get('php/users_get.php', options).map((r: Response) => r.json())
    .catch((err, caught) => Observable.of({}));
  }

  setUser(user: User): any {
    const body = new URLSearchParams();
    body.set('mail', user.mail );
    body.set('name', user.name);
    body.set('password', user.password);
    body.set('surname', user.surname);
    body.set('patronymic', user.patronymic);
    body.set('photoHref', user.photoHref);
    body.set('phone', user.phone);
    return this.http.post('http://localhost:8080/registration/newDriver', body); // .map((r: Response) => r.json());
  }

  setMechanic(mechanic: Mechanic): any {
    const body = new URLSearchParams();
    body.set('mail', mechanic.mail );
    body.set('name', mechanic.name);
    body.set('password', mechanic.password);
    body.set('surname', mechanic.surname);
    body.set('patronymic', mechanic.patronymic);
    body.set('photoHref', mechanic.photoHref);
    body.set('phone', mechanic.phone);
    console.log(mechanic.service.name);
    body.set('serviceName', mechanic.service.name);
    body.set('post', mechanic.post);
    body.set('about', mechanic.about);
    return this.http.post('http://localhost:8080/registration/newMechanic', body); // .map((r: Response) => r.json());
  }

  deleteUser(id: number): any {
    const data = JSON.stringify({ id: id, mode: 'delete' });
    return this.http.post('php/users_set.php', data).map((r: Response) => r.json());
  }
  getTest(): any {
    return this.http.get('http://localhost:8080/test?id=1');
  }
}
