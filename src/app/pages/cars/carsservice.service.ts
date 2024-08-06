import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CarsserviceService {

  constructor(private httpClient: HttpClient) { }

  getApiCars(numPage: number):Observable<any>{
    return this.httpClient.get<any>
    (`${environment.API}/coches?page=${numPage}`)
   }

  }


