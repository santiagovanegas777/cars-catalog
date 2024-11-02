import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/pages/login/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],

})
export class HeaderComponent {
//  userRole :any ={};
 public inputText = '';

  constructor(public loginService: LoginService, private router: Router){}
// ngOnInit(){
//  this.getUserRole();


// }
  logout(){
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  public handleKeyUp(value: string): void {
    this.inputText = value;
    console.log(this.inputText);
  }


  }

