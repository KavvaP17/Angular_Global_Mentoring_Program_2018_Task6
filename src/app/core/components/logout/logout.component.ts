import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../auth/services/auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  public user;
  @Output() userLogout = new EventEmitter<boolean>();


  constructor(private authService: AuthService) { }

  ngOnInit() {
      this.user = this.authService.getUserInfo();
  }

  public logout(): void {
      this.authService.logout();
      this.userLogout.emit(true);
  }

}
