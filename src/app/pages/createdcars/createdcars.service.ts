import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CreatedcarsService {

  constructor(private httpClient: HttpClient) { }

  createdCar(car:any){
    return this.httpClient.post(`${environment.API}/coches`, car);
  }
}
