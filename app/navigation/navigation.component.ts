import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';


@Component({
  selector: 'plants-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  role: string = 'guest';

  constructor(private as: AuthService) { }

  ngOnInit() {
    this.refreshRole();
  }
  refreshRole(): void {
    this.role = sessionStorage.getItem('role');
  }
}
