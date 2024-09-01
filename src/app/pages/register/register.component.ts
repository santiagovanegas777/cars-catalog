import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  formGroup!: FormGroup;

constructor(private formBuilder: FormBuilder, private registerService:RegisterService ,private router: Router){

}

ngOnInit(){
  this.initForm();
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

  this.registerService.createUser(this.formGroup.value).subscribe(response=>{
    console.log(response);
    this.router.navigate(['/login']);
  });

}
}
