import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AdminGuard } from './admin.guard';
import { RegisteredGuard } from './registered.guard';
import { StaticPageComponent } from './static-page/static-page.component';
import { VisitorGuard } from './visitor.guard';
import {ServiceListComponent} from './service-list/service-list.component';
import {ServiceDetailComponent} from './service-detail/service-detail.component';
import {MechanicDetailComponent} from './mechanic-detail/mechanic-detail.component';

const appRoutes: Routes = [
  { path: 'auth', loadChildren: 'app/auth.module#AuthModule' },
  { path: 'request', loadChildren: 'app/requests.module#RequestsModule' },
  { path: 'messaging', loadChildren: 'app/message.module#MessageModule' },
  { path: 'registration', loadChildren: 'app/registration.module#RegistrationModule'},
  { path: 'services', component: ServiceListComponent},
  { path: 'services/:name', component: ServiceDetailComponent},
  { path: 'mechanic/:id', component: MechanicDetailComponent},
  { path: 'user', loadChildren: 'app/users.module#UsersModule',
  canLoad: [AdminGuard] },
  { path: 'about', component: StaticPageComponent, data: {
    fileName: 'about.html',
    title: 'О фирме'
  }},
  { path: '', pathMatch: 'full', component: MainComponent },
  { path: '**', component: StaticPageComponent, data: {
    fileName: '404.html',
    title: 'Ошибка'
  }}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [AdminGuard, RegisteredGuard, VisitorGuard]
})
export class AppRoutingModule { }
