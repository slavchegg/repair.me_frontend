import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../service.service';
import { Service } from '../service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'plants-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  services: Observable<Service[]>;

  constructor(private ss: ServiceService) { }

  ngOnInit() {
    this.services = this.ss.getServices();
  }
}
