import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterResponseInterface } from '../models/character.model';
import { LoginService } from '../pages/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  getApiCharacters(): Observable<CharacterResponseInterface>{
    return this.httpClient.get<CharacterResponseInterface>('https://api-catalogo-coches.vercel.app/coches')
  }

  getApiDetailCharacter(_id:string):Observable<any>{
    return this.httpClient.get<any>('https://api-catalogo-coches.vercel.app/coches/id/' + _id)

  }
///como hacer una peticion a la api enviado el token en los headers
  // getApiUser(): Observable<any>{
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Authorization', `Bearer ${this.loginService.token}`);

  //   return this.httpClient.get('https://api-catalogo-coches.vercel.app/users/',{
  //     headers: headers
  //   })
  // }


  getApiUser(): Observable<any>{
    return this.httpClient.get('https://api-catalogo-coches.vercel.app/users/',{

    })
  }
}
