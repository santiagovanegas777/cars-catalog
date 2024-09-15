import { Component } from '@angular/core';
import { FilterCarService } from './filter-car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filter-car',
  templateUrl: './filter-car.component.html',
  styleUrls: ['./filter-car.component.scss']
})
export class FilterCarComponent {

  filterCharacter!: any;
constructor(private filterNameCarService: FilterCarService, private ruta:ActivatedRoute,){}

ngOnInit(){
 this.ruta.params.subscribe(params=>{
  console.log(params['cocheName']);
  this.getCharactersName(params['cocheName']);
 });

}

public getCharactersName(cocheName: string){
  this.filterNameCarService.getApiNameCharacter(cocheName).subscribe(data=>{
    console.log(data[0]);
    this.filterCharacter = data;
    console.log(this.filterCharacter);

  });
}


}
