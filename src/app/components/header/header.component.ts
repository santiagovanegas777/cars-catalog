import { Component } from '@angular/core';
import { LoginService } from 'src/app/pages/login/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent {
 userRole :any ={};

  constructor(public loginService: LoginService){}
// ngOnInit(){
//  this.getUserRole();


// }
  logout(){
    this.loginService.logout();
  }


  }

