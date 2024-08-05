
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
  currenPage: number = 1;
  characterDetail: any=[];

  constructor(private carsService: CarsserviceService , public detailService: DetailServiceService, public loginService: LoginService){}

  ngOnInit() {
    this.getCars(this.currenPage);
  }

  private getCars(page:number){
    this.carsService.getApiCars(page).subscribe((data:CharacterResponseInterface)=>{
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

// public getDetail(_id: string){
//   this.detailService.getApiDetailCharacter(_id).subscribe(data =>{
//     console.log(data)
//     this.characterDetail = this.characterDetail = data;
//   });

// }


}
