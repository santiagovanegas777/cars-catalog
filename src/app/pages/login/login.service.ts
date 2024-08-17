import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string | null = sessionStorage.getItem('token-app');
  userInfo: any;

  constructor(private httpClient: HttpClient ,private router: Router,private location: Location) { }


  login(obj:any): Observable<any> {
   return this.httpClient.post(`${environment.API}/users/login`, obj).pipe(
    map((response: any) =>{
      this.token = response.token;
      this.userInfo = response.userInfo;
      sessionStorage.setItem('token-app', response.token);
      // sessionStorage.setItem('user-app', response.userInfo);

      this.location.back();
      // this.router.navigate(['/..'])


      return response;

    })
   );
  }

  logout(){
    this.token = null;
    sessionStorage.removeItem('token-app');
    this.router.navigate(['/login']);
  }


}
