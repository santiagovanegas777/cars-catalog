
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UpdateprofileService } from './updateprofile.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.scss']
})
export class UpdateprofileComponent {
  formGroup!: FormGroup;
  userDetail: any={};

  constructor(private formBuilder: FormBuilder, private updateProfileService: UpdateprofileService, private router: Router, private loginService: LoginService){}
  ngOnInit(){
    this.getUserIdUpdate();
    this.initForm();
  }
  public getUserIdUpdate(){
    this.userDetail =this.loginService.userInfo._id;
    console.log(this.userDetail);

  }

  private initForm() {
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

    this.updateProfileService.updateUser(this.userDetail,this.formGroup.value).subscribe(response=>{
      console.log(response);
      this.router.navigate(['/login']);
    });

  }
 }
