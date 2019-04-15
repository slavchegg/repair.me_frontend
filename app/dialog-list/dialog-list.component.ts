import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageService} from '../message.service';
import {Dialog} from '../dialog';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'plants-dialog-list',
  templateUrl: './dialog-list.component.html',
  styleUrls: ['./dialog-list.component.css']
})
export class DialogListComponent implements OnInit {
  dialogs: Observable<Dialog[]>;
  constructor(private route: ActivatedRoute, private ms: MessageService, private router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('role') === 'mechanic' || sessionStorage.getItem('role') === 'serviceAdmin') {
      this.dialogs = this.ms.getMechanicDialogs();
    }
    if (sessionStorage.getItem('role') === 'driver') {
      this.dialogs = this.ms.getUserDialogs();
    }
  }
  redirect(id: number) {
    this.router.navigate(['messaging/dialog', id.toString()]);
  }
}
