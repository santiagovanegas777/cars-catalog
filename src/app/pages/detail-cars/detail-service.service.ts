import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailServiceService {

  constructor(private httpClient: HttpClient) { }

  getApiDetailCharacter(_id:string):Observable<any>{
    return this.httpClient.get<any>('https://api-catalogo-coches.vercel.app/coches/id/' + _id)

  }
}
