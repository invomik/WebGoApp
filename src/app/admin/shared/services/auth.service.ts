import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserParams} from '../../../gomodel/userParams';
import {Observable} from 'rxjs';
import {GoService} from '../../../servises/go.service';
import {LoginInfo} from '../../../gomodel/loginInfo';
import {EnvUtils} from '../../../../environments/envUtils';

@Injectable( {providedIn: 'root'} )
export class AuthService {

  private tokenValue = 'false';
  private sessionId: string | null | undefined = null;

  constructor(private goService: GoService, private http: HttpClient) {
  }

  setLoginInfo(loginInfo: LoginInfo) {
    this.goService.setLoginInfo(loginInfo);
  }

  getLoginInfo(): LoginInfo {
    return this.goService.getLoginInfo();
  }

  get sessionID(): string | null | undefined {
    return this.sessionId;
  }

  set sessionID(value) {
    this.sessionId = value;
    if ( this.sessionId ) {
      this.setToken('true');
    } else {
      this.setToken('false');
    }
  }

  get token(): string {
    console.log(`token = ${this.tokenValue}`);
    return this.tokenValue;
  }

  login( params: UserParams): Observable<LoginInfo> {
    return this.http.post<LoginInfo>(`${EnvUtils.getServiceUrl()}/go/login`, params);
  }

  logout(): void {

  }

  isAuthenticated(): boolean {
    console.log(`isAuthenticated = ${this.tokenValue}`);
    return this.token === 'true' ? true : false;
  }

  public setToken(param: string): void {
    this.tokenValue = param;
  }

}
