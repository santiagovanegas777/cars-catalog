import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }

  getCharacters(): Observable<any>{
    return this.httpClient.get('https://api-catalogo-coches.vercel.app/coches')
  }
}
