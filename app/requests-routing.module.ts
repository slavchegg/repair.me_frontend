import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RequestMakeComponent } from './request-make/request-make.component';
import { MechanicRequestsComponent } from './mechanic-requests/mechanic-requests.component';
import {UnregisteredGuard} from './unregistered.guard';
import {SpecializationGuard} from './specialization.guard';
import {UserRequestComponent} from './user-request/user-request.component';
import {UserGuard} from './user.guard';

const appRoutes: Routes = [
  { path: '', children: [
      { path: 'guest', component: RequestMakeComponent, canActivate: [UnregisteredGuard] },
      { path: 'user', component: UserRequestComponent, canActivate: [UserGuard]},
      { path: 'get', component: MechanicRequestsComponent, canActivate: [SpecializationGuard]},
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [UnregisteredGuard, SpecializationGuard, UserGuard]
})
export class RequestsRoutingModule { }
