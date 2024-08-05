import { Component } from '@angular/core';
import { CharacterInterface, CharacterResponseInterface } from 'src/app/models/character.model';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.scss']
})
export class ListCarsComponent {
  characterList: CharacterInterface[] = [];
  userList: any[] = [];

  constructor(private requestService: RequestService){}

  ngOnInit() {
    this.getCharacters();
    this.getUser();
  }

  private getCharacters(){
    this.requestService.getApiCharacters().subscribe((data: CharacterResponseInterface) => {
      console.log(data.coches)
      this.characterList = this.characterList =data.coches;
    })
  }
  public getDetail(_id: string){
    this.requestService.getApiDetailCharacter(_id).subscribe(data =>{
      console.log(data);
    });

}

public getUser(){
  this.requestService.getApiUser().subscribe((data:any)=>{
    console.log(data)
    this.userList = this.userList = data;
    console.log(this.userList)
  })
}

  }

