import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {UsersService} from './users.service';
import {MechanicRegistrationComponent} from './mechanic-registration/mechanic-registration.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {ServiceRegistrationComponent} from './service-registration/service-registration.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {ServiceService} from './service.service';
import {RegistrationRoutingModule} from './registration-routing.module';
import {CommonModule} from '@angular/common';
import { CarRegistrationComponent } from './car-registration/car-registration.component';
import {CarsService} from './cars.service';
import { MechanicSpecializationComponent } from './mechanic-specialization/mechanic-specialization.component';
import { AngularMultiSelectModule } from 'angular4-multiselect-dropdown/angular4-multiselect-dropdown';

@NgModule({
  declarations: [
    MechanicRegistrationComponent,
    UserRegistrationComponent,
    ServiceRegistrationComponent,
    CarRegistrationComponent,
    MechanicSpecializationComponent,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RegistrationRoutingModule,
    AngularMultiSelectModule
  ],
  providers: [UsersService, ServiceService, CarsService]
})
export class RegistrationModule { }
