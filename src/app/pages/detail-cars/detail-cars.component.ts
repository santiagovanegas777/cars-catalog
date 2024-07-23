


import { Component } from '@angular/core';
import { DetailServiceService } from './detail-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-cars',
  templateUrl: './detail-cars.component.html',
  styleUrls: ['./detail-cars.component.scss']
})
export class DetailCarsComponent {
  characterDetail: any=[];

  constructor(private ruta:ActivatedRoute, private detailService:DetailServiceService){}

  ngOnInit(){
    this.ruta.params.subscribe(params=>{
      console.log(params['id']);
      this.getDetail(params['id']);
    })
  }

  public getDetail(_id: string){
    this.detailService.getApiDetailCharacter(_id).subscribe((data:any)=>{
      
      this.characterDetail = data;
      console.log(this.characterDetail);
    });

  }



}
