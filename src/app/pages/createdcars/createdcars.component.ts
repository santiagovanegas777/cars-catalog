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
 private fileTmp:any;

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
  getFile($event: any): void {
    //TODO esto captura el archivo!
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

  this.createdCarsService.createdCar(body).subscribe(response=>{
    console.log(response);
    this.router.navigate(['/login']);
  });

 }
}
