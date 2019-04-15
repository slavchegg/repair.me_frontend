import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { RequestsService } from './requests.service';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavigationComponent } from './navigation/navigation.component';
import { StaticPageComponent } from './static-page/static-page.component';
import { PricePipe } from './price.pipe';
import { ServiceListComponent } from './service-list/service-list.component';
import {ServiceService} from './service.service';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { MechanicDetailComponent } from './mechanic-detail/mechanic-detail.component';
import {MechanicService} from './mechanic.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavigationComponent,
    StaticPageComponent,
    PricePipe,
    ServiceListComponent,
    ServiceDetailComponent,
    MechanicDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [AuthService, UsersService, RequestsService, ServiceService, MechanicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
