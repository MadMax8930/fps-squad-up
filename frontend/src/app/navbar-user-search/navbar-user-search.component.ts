import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar-user-search',
  templateUrl: './navbar-user-search.component.html',
  styleUrls: ['./navbar-user-search.component.css']
})
export class NavbarUserSearchComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }


}
