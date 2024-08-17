import { _idInterface } from 'src/app/models/character.model';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from './profile.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userDetail: any={};

  constructor(private ruta:ActivatedRoute, private profileService:ProfileService, public loginService:LoginService){}

  ngOnInit(){
    // console.log(this.loginService.userInfo);
  this.getUserId();

  }

  public getUserId(){
    this.userDetail =this.loginService.userInfo;
    console.log(this.userDetail);

  }


}

