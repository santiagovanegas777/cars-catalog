import { DeleteprofileService } from './deleteprofile.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteprofile',
  templateUrl: './deleteprofile.component.html',
  styleUrls: ['./deleteprofile.component.scss']
})
export class DeleteprofileComponent {
  formGroup!: FormGroup;
  userDetail: any={};

  constructor(private formBuilder: FormBuilder, private deleteProfileService: DeleteprofileService, private router: Router, private loginService: LoginService){}

  ngOnInit(){
    this.getUserIdDelete();
    this.initForm();
  }
  public getUserIdDelete(){
    this.userDetail = this.loginService.userInfo._id;
  }

  private initForm(){
    this.formGroup = this.formBuilder.group({

      email: [''],
          password: [''],
          username: [''],
          telefono: [''],
          nombre: [''],
          apellidos: [''],
          direccion:  [''],
    });
  }
  public handleSubmit(): void{
    console.log(this.formGroup.value);

    this.deleteProfileService.removeUser(this.userDetail,this.formGroup.value).subscribe(response=>{
      console.log(response);
      this.router.navigate(['/login']);
    });
  }
}
