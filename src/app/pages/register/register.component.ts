import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

        email: ['', [Validators.required, Validators.minLength(6)]],
        password: ['',[Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
        username: ['',[Validators.required, Validators.minLength(6)]],
        telefono: ['',[Validators.required, Validators.minLength(9)]],
        nombre: ['', [Validators.required, Validators.minLength(2)]],
        apellidos: ['', [Validators.required, Validators.minLength(3)]],
        direccion:  ['',[Validators.required, Validators.minLength(6)]],


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
