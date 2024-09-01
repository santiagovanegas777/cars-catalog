import { Component } from '@angular/core';
import { GetAllUsersService } from './get-all-users.service';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.scss']
})
export class GetAllUsersComponent {
  userList: any[]= [];

  constructor(private getAlluserService: GetAllUsersService){}

  ngOnInit(){
    this.getAllUser();
  }

  public getAllUser(){
    this.getAlluserService.getApiUser().subscribe((data:any)=>{
      this.userList = this.userList = data;
      console.log(this.userList);
    });

  }
}
