import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MechanicService} from '../mechanic.service';
import {Mechanic} from '../mechanic';

@Component({
  selector: 'plants-mechanic-detail',
  templateUrl: './mechanic-detail.component.html',
  styleUrls: ['./mechanic-detail.component.css']
})
export class MechanicDetailComponent implements OnInit {
  mechanic: Mechanic;
  id: string;
  constructor(private route: ActivatedRoute, private ms: MechanicService, private router: Router) { }

  ngOnInit() {
    this.id  = this.route.snapshot.paramMap.get('id');
    this.ms.getMechanic(this.id).subscribe(data => {
      this.mechanic = data;
    });
  }

  redirect() {
    sessionStorage.setItem('redirect', 'fromMechanic');
    sessionStorage.setItem('mechanicId', this.id);
    if (sessionStorage.getItem('role') === 'driver') {
      this.router.navigate(['/request/user']);
    }
    if (sessionStorage.getItem('role') === 'guest') {
      this.router.navigate(['/registration/driver']);
    }
  }

}
