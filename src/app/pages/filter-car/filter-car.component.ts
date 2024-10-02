import { Component } from '@angular/core';
import { FilterCarService } from './filter-car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { DeleteCarsService } from '../delete-cars/delete-cars.service';
import { CharacterInterface } from 'src/app/models/character.model';

@Component({
  selector: 'app-filter-car',
  templateUrl: './filter-car.component.html',
  styleUrls: ['./filter-car.component.scss']
})
export class FilterCarComponent {

  filterCharacter!: any;

constructor(private filterNameCarService: FilterCarService, private ruta:ActivatedRoute,public loginService: LoginService,public deleteCar: DeleteCarsService, private router: Router){}

ngOnInit(){
 this.ruta.params.subscribe(params=>{
  console.log(params['cocheName']);
  this.getCharactersName(params['cocheName']);
 });

}

public getCharactersName(cocheName: string){
  this.filterNameCarService.getApiNameCharacter(cocheName).subscribe((data:any)=>{
    console.log(data);
    this.filterCharacter = data;
    console.log(this.filterCharacter);

  });

}

public handleClic(){


  this.deleteCar.removedCarApi(this.filterCharacter._id).subscribe(response=>{

    this.router.navigate(['/cars']);

  });
}
}
