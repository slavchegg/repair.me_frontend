import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Mechanic} from './mechanic';

@Injectable()
export class MechanicService {

  constructor(private http: Http) { }
  getMechanic(id: string ): Observable<Mechanic> {
    const params = new URLSearchParams();
    params.set('id', id);
    const options = new RequestOptions({ params: params });
    return this.http.get('http://localhost:8080/mechanic/getOne', options).map((r: Response) => r.json())
      .catch((err, caught) => Observable.of({}));
  }
}
