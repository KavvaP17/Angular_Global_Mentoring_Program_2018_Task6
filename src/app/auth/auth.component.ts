import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public hide = true;
  public userLogin = '';
  public userPassword = '';

  @Output() authenticated = new EventEmitter<boolean>();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.userLogin, this.userPassword);
    this.authenticated.emit(true);
  }

}
