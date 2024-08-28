import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { _idInterface } from 'src/app/models/character.model';
import { environment } from 'src/environments/environment.development';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteCarsService {


  constructor(private httpClient: HttpClient, private loginService: LoginService, ) { }


  removedCarApi(_id: any){
    return this.httpClient.delete(`${environment.API}/coches/` + _id);
  }


}
