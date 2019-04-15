import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
   private role: string = 'guest';
   private name: string = '';

  constructor(private http: Http) { }

  login(credentials): any {
    const body = new URLSearchParams();
    body.set('username', credentials.username);
    body.set('password', credentials.password);
    console.log(credentials.username);
    // return this.http.post('http://localhost:8080/registration/login', body).map((r: Response) => r.json());
    return this.http.post('http://localhost:8080/registration/login', body).map((r: Response) => {
      const d = JSON.parse(r.text());
      this.role = d['role'];
      // console.log(this.role);
      sessionStorage.setItem('role', this.role);
      // return this.role;
    });
  }

  logout(): any {
    sessionStorage.setItem('role', 'guest');
    return this.http.get('http://localhost:8080/registration/logout');
  }

  getRole(): Observable<string> {
    // if (this.role === 'guest') {
    //   const params: URLSearchParams = new URLSearchParams();
    //   params.set('action', 'check');
    //   const options: RequestOptions = new RequestOptions({ params: params });
    //   return this.http.get('php/auth.php', options).map((r: Response) => {
    //     const d = r.json();
    //     this.role = d.role;
    //     return this.role;
    //   });
    // } else {
    //   return Observable.of(this.role);
    // }
    this.role = sessionStorage.getItem('role');
    return Observable.of(this.role);
  }

  getName(): Observable<string> {
      const params: URLSearchParams = new URLSearchParams();
      params.set('action', 'name');
      const options: RequestOptions = new RequestOptions({ params: params });
      return this.http.get('php/auth.php', options).map((r: Response) => {
        const d = r.json();
        this.name = d.name;
        return this.name;
      });
  }
}
