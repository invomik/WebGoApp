import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from './admin/shared/services/auth.service';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AuthInterseptor implements HttpInterceptor {

  constructor(private auth: AuthService, private router: Router) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.auth.isAuthenticated()) {
      console.log(`intercept`);
      req = req.clone(
        {
          setHeaders: {
            sessionid: this.auth.sessionID || ''
          }
          // ,
          // setParams: {
          //   JSESSIONID: this.auth.sessionID || ''
          // }

        }
      );
    }
    return next.handle(req).pipe(
        catchError( (error: HttpErrorResponse) => {
          console.log('[Interseptor error]: ', error);
          if (error.status === 401) {
            this.auth.logout();
            this.router.navigate(['/admin', 'login'], {
              queryParams: {
                authFailed: true
              }
            });
          }
          return throwError( error );
        })
      );
    }


}
