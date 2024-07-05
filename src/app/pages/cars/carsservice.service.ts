import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsserviceService {

  constructor(private httpClient: HttpClient) { }

  getApiCars(numPage: number):Observable<any>{
    return this.httpClient.get<any>
    (`https://api-catalogo-coches.vercel.app/coches?page=${numPage}`)
   }

  }


