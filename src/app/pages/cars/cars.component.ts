
import { Component } from '@angular/core';
import { CarsserviceService } from './carsservice.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  characterList: any = [];
  currenPage: number = 1;

  constructor(private carsService: CarsserviceService){}

  ngOnInit() {
    this.getCars(this.currenPage);
  }

  private getCars(page:number){
    this.carsService.getApiCars(page).subscribe((data:any)=>{
      console.log(data.coches)
      this.characterList = this.characterList= data.coches;
    })
  }

handlePaginatior(action:string ){
if(action === 'prev' && this.currenPage !== 1){
  this.currenPage = this.currenPage - 1;
  this.getCars(this.currenPage);

}else if(action === 'next' && this.currenPage !== 4){
  this.currenPage = this.currenPage + 1;
  this.getCars(this.currenPage);
}

}


}
