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
//   private cocheName:any;
//   private cochePrice:any;
//   private cocheModel:any;
//   private cocheColor: any;
//   private cochefuel: any;
//   private cochePower: any;
//   constructor(private formBuilder: FormBuilder, private createdCarsService: CreatedcarsService,private router: Router){}

//   getFile($event: any): void {
//     //TODO esto captura el archivo!
//     const [ file ] = $event.target.files;
//     this.fileTmp = {
//       fileRaw:file,
//       fileName:file.name
//     };
//   }

//   getName($event: any): void {
//     const  [cocheName]  = $event.target.value;
//     this.cocheName ={
//       cocheName:cocheName
//     };
//   }
//   sendFile():void{

//     const body = new FormData();
//     body.append('cocheImg', this.fileTmp.fileRaw, this.fileTmp.fileName);
//     body.append('cocheName',this.cocheName.cocheName);
//     body.append('cochePrice','3232323');
//     body.append('cocheModel','23');
//     body.append('cocheColor','rojo');
//     body.append('cochefuel','Gasolina');
//     body.append('cochePower','444');

//     this.createdCarsService.sendPost(body)
//     .subscribe(res =>{
//       console.log(res);
//       console.log(body);
//     });
//   }
// }
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
