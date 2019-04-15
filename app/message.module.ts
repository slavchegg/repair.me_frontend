import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import {DialogListComponent} from './dialog-list/dialog-list.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MessageService} from './message.service';
import {MessageRoutingModule} from './message-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MessageRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [DialogComponent, DialogListComponent],
  providers: [MessageService]
})
export class MessageModule { }
