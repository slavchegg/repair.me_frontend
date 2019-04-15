import { Component, OnInit } from '@angular/core';
import {Service} from '../service';
import {ServiceService} from '../service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Mechanic} from '../mechanic';

@Component({
  selector: 'plants-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  service: Service;
  data: Response;
  mechanics: Mechanic[];

  constructor(private route: ActivatedRoute, private ss: ServiceService, private router: Router) { }

  ngOnInit() {
    const name: string = this.route.snapshot.paramMap.get('name');
    this.ss.getService(name).subscribe(data => {
        this.service = JSON.parse(data.text())['service'];
        this.mechanics = JSON.parse(data.text())['mechanics'];
    });
  }
  redirect() {
    sessionStorage.setItem('redirect', 'fromService');
    sessionStorage.setItem('serviceName', this.service.name);
    if (sessionStorage.getItem('role') === 'driver') {
      this.router.navigate(['/request/user']);
    }
    if (sessionStorage.getItem('role') === 'guest') {
      this.router.navigate(['/registration/driver']);
    }
  }
}
