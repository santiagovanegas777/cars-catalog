import { FormBuilder, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { UpdatedCarService } from './updated-car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsserviceService } from '../cars/carsservice.service';
import { _idInterface } from 'src/app/models/character.model';

@Component({
  selector: 'app-updated-car',
  templateUrl: './updated-car.component.html',
  styleUrls: ['./updated-car.component.scss']
})
export class UpdatedCarComponent {
  formGroup!: FormGroup;
  carId: any ;
 private fileTmp:any;
  constructor(private formBuilder: FormBuilder, private udateCarService: UpdatedCarService, private router: Router, private carService: CarsserviceService, private ruta: ActivatedRoute,){}

  ngOnInit(){
    this.ruta.params.subscribe(params=>{

      this.carId = (params['id']);
      console.log(this.carId);
    });
    this.initForm();
  }

private initForm(){
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
getFile($event: any): void {

  const [ file ] = $event.target.files;
  this.fileTmp = {
    fileRaw:file,
    fileName:file.name
  };
}

public handleSubmit(): void{
  const body = new FormData();
   body.append('cocheImg', this.fileTmp.fileRaw, this.fileTmp.fileName);
   body.append('cocheName',this.formGroup.value.cocheName);
   body.append('cochePrice',this.formGroup.value.cochePrice);
   body.append('cocheModel',this.formGroup.value.cocheModel);
   body.append('cocheColor',this.formGroup.value.cocheColor);
   body.append('cochefuel',this.formGroup.value.cochefuel);
   body.append('cochePower',this.formGroup.value.cochePower);

  // console.log(body);

  this.udateCarService.updateCar(this.carId,body).subscribe(response=>{
    console.log(response);
    this.router.navigate(['/cars']);
  });

 }
}
