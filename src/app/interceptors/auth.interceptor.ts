
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn : 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {

    const authReq = req.clone({headers: req.headers.set('Authorization', `Bearer ${sessionStorage.getItem('token-app')}`)});

    return next.handle(authReq);
  }
}
