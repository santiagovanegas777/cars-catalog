import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CreatedcarsService {

  constructor(private httpClient: HttpClient) { }

  // sendPost(body:FormData):Observable<any>{
  //   return this.httpClient.post(`${environment.API}/coches`, body);
  // }

  // createdCar(cars:any){
  //   return this.httpClient.post(`${environment.API}/coches`, cars);
  // }
createdCar(body:FormData):Observable<any>{
    return this.httpClient.post(`${environment.API}/coches`, body);
  }


}


