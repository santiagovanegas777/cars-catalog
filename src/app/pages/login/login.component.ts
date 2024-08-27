import { LoginService } from './login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public email = '';
  public password = '';


constructor(public loginService:LoginService){}

ngOnit(){
  console.log(this.loginService.token);
  console.log(this.loginService.userInfo);
}

public onSubmit() {


  const obj = {
    email: this.email,
    password: this.password
  };

  this.login(obj);

}


public login(obj:any){
  this.loginService.login(obj).subscribe(data => {
    console.log(data);
    console.log(this.loginService.token);
    console.log(this.loginService.userInfo.role);

  });
}
}
