import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  devices: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((isLogedIn) => {
      if (!isLogedIn) {
        this.router.navigate(['/']);
      }
    });
    this.apiService.getAll().subscribe(res => this.devices = res)
  }

  logoutButtonAction() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
