import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { RequestsService } from '../requests.service';
import { Rrequest } from '../rrequest';

@Component({
  selector: 'plants-mechanic-requests',
  templateUrl: './mechanic-requests.component.html',
  styleUrls: ['./mechanic-requests.component.css']
})
export class MechanicRequestsComponent implements OnInit {
  name: string;
  generalRequests: Observable<Rrequest[]>;
  exactRequests: Observable<Rrequest[]>;
  constructor(private route: ActivatedRoute, private rs: RequestsService, private router: Router, private title: Title) { }

  ngOnInit() {
    this.generalRequests = this.rs.getGeneralRequests();
    this.exactRequests = this.rs.getExactRequests();
  }

  private acceptExact(id: string, decision: string) {
    this.rs.acceptExactRequest(id, decision).subscribe();
    if (decision === 'false') {
      window.location.reload();
    }
    if (decision === 'true') {
      this.router.navigate(['/messaging/dialogs']);
    }

  }
  private acceptGeneral(id: string, decision: string) {
    this.rs.acceptGeneralRequest(id, decision).subscribe();
    if (decision === 'false') {
      window.location.reload();
    }
    if (decision === 'true') {
      this.router.navigate(['/messaging/dialogs']);
    }
  }
}
