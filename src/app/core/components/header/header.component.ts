import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../auth/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isAuthenticated: boolean;
  @Output() logout = new EventEmitter<boolean>();

  constructor(private authService : AuthService) { }

  ngOnInit() {

  }
  userLogout() {
    this.logout.emit(true);
  }

}
