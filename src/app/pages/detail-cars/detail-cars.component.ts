import { Component } from '@angular/core';
import { DetailServiceService } from './detail-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterInterface, _idInterface } from 'src/app/models/character.model';
import { LoginService } from '../login/login.service';
import { DeleteCarsService } from '../delete-cars/delete-cars.service';

@Component({
  selector: 'app-detail-cars',
  templateUrl: './detail-cars.component.html',
  styleUrls: ['./detail-cars.component.scss']
})
export class DetailCarsComponent {
  characterDetail!: CharacterInterface;


  constructor(private ruta:ActivatedRoute, private detailService:DetailServiceService, public loginService: LoginService, public deleteCar: DeleteCarsService, private router: Router
  ){}

  ngOnInit(){
    this.ruta.params.subscribe(params=>{
      console.log(params['id']);
      this.getDetail(params['id']);
    });
  }

  public getDetail(_id: _idInterface){
    this.detailService.getApiDetailCharacter(_id).subscribe((data:CharacterInterface)=>{

      this.characterDetail = data;
      console.log(this.characterDetail);
    });

  }
  public handleClic(){


    this.deleteCar.removedCarApi(this.characterDetail._id).subscribe(response=>{

      this.router.navigate(['/cars']);

    });
  }
}
