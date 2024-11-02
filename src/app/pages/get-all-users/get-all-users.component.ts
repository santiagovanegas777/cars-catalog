import { Component } from '@angular/core';
import { GetAllUsersService } from './get-all-users.service';
import { User } from 'src/app/models/character.model';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.scss'],
})
export class GetAllUsersComponent {
  userList: User[] = [];
  filterUser = '';

  constructor(private getAlluserService: GetAllUsersService) {}

  ngOnInit() {
    this.getAllUser();
  }

  public getAllUser() {
    this.getAlluserService.getApiUser().subscribe((data: User[]) => {

      this.userList =data;
      console.log(this.userList);

    });
  }
}
