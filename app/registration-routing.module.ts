import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MechanicRegistrationComponent} from './mechanic-registration/mechanic-registration.component';
import {ServiceRegistrationComponent} from './service-registration/service-registration.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {ServiceRegistrationGuard} from './service-registration.guard';
import {CarRegistrationComponent} from './car-registration/car-registration.component';
import {RegisteredGuard} from './registered.guard';
import {MechanicSpecializationComponent} from './mechanic-specialization/mechanic-specialization.component';
import {SpecializationGuard} from './specialization.guard';

const appRoutes: Routes = [
  { path: '', children: [
      { path: 'driver', component: UserRegistrationComponent },
      { path: 'mechanic', component: MechanicRegistrationComponent },
      { path: 'service', component: ServiceRegistrationComponent, canActivate: [ServiceRegistrationGuard] },
      { path: 'car', component: CarRegistrationComponent, canActivate: [RegisteredGuard]},
      { path: 'specialization', component: MechanicSpecializationComponent, canActivate: [SpecializationGuard]},
    ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [ServiceRegistrationGuard, RegisteredGuard, SpecializationGuard]

})
export class RegistrationRoutingModule { }
