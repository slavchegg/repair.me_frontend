import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RequestMakeComponent } from './request-make/request-make.component';
import { RequestsRoutingModule } from './requests-routing.module';
import { RequestsService } from './requests.service';
import { MechanicRequestsComponent } from './mechanic-requests/mechanic-requests.component';
import {CarsService} from './cars.service';
import { UserRequestComponent } from './user-request/user-request.component';

@NgModule({
  imports: [
    CommonModule,
    RequestsRoutingModule,
    FormsModule
  ],
  declarations: [RequestMakeComponent, MechanicRequestsComponent, UserRequestComponent],
  providers: [RequestsService, CarsService]
})
export class RequestsModule { }
