import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { CreatedcarsService } from './createdcars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createdcars',
  templateUrl: './createdcars.component.html',
  styleUrls: ['./createdcars.component.scss']
})
export class CreatedcarsComponent {
  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private createdCarsService: CreatedcarsService,private router: Router){}

  ngOnInit(){
    this.initForm();
  }
  private initForm() {
    this.formGroup = this.formBuilder.group({

          cocheName: [''],
          cochePrice: [''],
          cocheImg: [''],
          cocheModel: [''],
          cocheColor: [''],
          cochefuel: [''],
          cochePower: [''],


    });
  }
  public handleSubmit(): void{
    console.log(this.formGroup.value);


    this.createdCarsService.createdCar(this.formGroup.value).subscribe(response=>{
      console.log(response);
      this.router.navigate(['/cars']);
    });

  }

}
