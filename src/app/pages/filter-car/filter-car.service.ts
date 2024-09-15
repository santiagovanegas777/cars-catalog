import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FilterCarService {


  constructor(private httpClient:HttpClient) { }

  getApiNameCharacter(cocheName: string): Observable<any>{
    return this.httpClient.get<any>('https://api-catalogo-coches.vercel.app/coches/cocheName/' + cocheName)
  }
}
