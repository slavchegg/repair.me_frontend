import { Injectable } from '@angular/core';
import {Http, RequestOptions, Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Message} from './message';
import {Dialog} from "./dialog";

@Injectable()
export class MessageService {

  constructor(private http: Http) { }

  getMessagesFromMechanicDialog(id: string): Observable<Message[]> {
    const params = new URLSearchParams();
    params.set('dialogId', id);
    const options = new RequestOptions({ params: params });
    return this.http.get('http://localhost:8080/mechanic/readMessages', options).map((r: Response) => r.json())
      .catch((err, caught) => Observable.of([]));
  }

  getMessagesFromUserDialog(id: string): Observable<Message[]> {
    const params = new URLSearchParams();
    params.set('dialogId', id);
    const options = new RequestOptions({ params: params });
    return this.http.get('http://localhost:8080/user/readUserMessages', options).map((r: Response) => r.json())
      .catch((err, caught) => Observable.of([]));
  }

  getMechanicDialogs(): Observable<Dialog[]> {
    return this.http.get('http://localhost:8080/mechanic/readDialogs').map((r: Response) => r.json())
      .catch((err, caught) => Observable.of([]));
  }

  getUserDialogs(): Observable<Dialog[]> {
    return this.http.get('http://localhost:8080/user/readUserDialogs').map((r: Response) => r.json())
      .catch((err, caught) => Observable.of([]));
  }

  sendMechanicMessage(id: string, content: string): any {
    const body = new URLSearchParams();
    body.set('dialogId', id);
    body.set('content', content);
    return this.http.post('http://localhost:8080/mechanic/writeMessage', body).map((r: Response) => r.json());
  }

  sendUserMessage(id: string, content: string): any {
    const body = new URLSearchParams();
    body.set('dialogId', id);
    body.set('content', content);
    return this.http.post('http://localhost:8080/user/writeMessage', body).map((r: Response) => r.json());
  }
}
