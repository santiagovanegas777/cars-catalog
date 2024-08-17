import { Component } from '@angular/core';
import { LoginService } from './pages/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cars-catalog';

 constructor(public loginService: LoginService) {}

  // logout(){

  //   this.loginService.logout();

  // }
}
