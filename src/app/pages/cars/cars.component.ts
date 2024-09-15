

import { Component } from '@angular/core';
import { CarsserviceService } from './carsservice.service';
import { DetailServiceService } from '../detail-cars/detail-service.service';
import { CharacterInterface, CharacterResponseInterface } from 'src/app/models/character.model';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  characterList: CharacterInterface[] = [];
  currenPage = 1;
  characterDetail: any=[];
  filterCharacter = "";
  // public inputText: string = '';

  constructor(private carsService: CarsserviceService , public detailService: DetailServiceService, public loginService: LoginService){}

  ngOnInit() {
    this.getCars(this.currenPage);

  }

  private getCars(page:number){
    this.carsService.getApiCars(page).subscribe((data:CharacterResponseInterface)=>{
      console.log(data.coches);
      this.characterList = this.characterList= data.coches;

    });
  }

handlePaginatior(action:string ){
if(action === 'prev' && this.currenPage !== 1){
  this.currenPage = this.currenPage - 1;
  this.getCars(this.currenPage);

}
else if (action === 'next'  && this.characterList.length ===3){
  this.currenPage = this.currenPage + 1;
  this.getCars(this.currenPage);

}
// else if(action === 'next'&&   this.characterList[0]._id,this.characterList[1]._id,this.characterList[2]._id === this.characterList[0]._id,this.characterList[1]._id,this.characterList[2]._id){
// this.currenPage = this.currenPage - 1;
// this.getCars(this.currenPage);
// }

}


}
