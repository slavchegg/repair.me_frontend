import { Component, OnInit } from '@angular/core';
import {Message} from '../message';
import {ActivatedRoute} from '@angular/router';
import {MessageService} from '../message.service';

@Component({
  selector: 'plants-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  messages: Message[];
  mes: Message;
  id: string;
  constructor(private route: ActivatedRoute, private ms: MessageService) { }

  ngOnInit() {
    this.mes = new Message();
    this.id = this.route.snapshot.paramMap.get('id');
    if (sessionStorage.getItem('role') === 'mechanic' || sessionStorage.getItem('role') === 'serviceAdmin') {
      this.ms.getMessagesFromMechanicDialog(this.id).subscribe(data => {
        this.messages = data['messages'];
      });
    }
    if (sessionStorage.getItem('role') === 'driver') {
      this.ms.getMessagesFromUserDialog(this.id).subscribe(data => {
        this.messages = data['messages'];
      });
    }
  }

  sendMessage(content: string) {
    if (sessionStorage.getItem('role') === 'mechanic' || sessionStorage.getItem('role') === 'serviceAdmin') {
      this.ms.sendMechanicMessage(this.id, content).subscribe();
    }
    if (sessionStorage.getItem('role') === 'driver') {
      this.ms.sendUserMessage(this.id, content).subscribe();
    }
  }
}
