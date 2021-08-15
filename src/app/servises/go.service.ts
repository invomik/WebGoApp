import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IGoMenu } from '../gomodel/gomenu';
import {Observable} from 'rxjs';
// import {Webconfig} from '../gomodel/webconfig';
import {EnvUtils} from '../../environments/envUtils';
import {ITfn} from '../gomodel/entities/ITfn';
import {Httpresult} from '../gomodel/http/httpresult';
import {UserParams} from '../gomodel/userParams';
import {LoginInfo} from '../gomodel/loginInfo';
import {IWaMainInfo} from '../gomodel/entities/IWaMainInfo';
import {switchMap} from 'rxjs/operators';
import {ILimit} from '../gomodel/entities/ILimit';

@Injectable({
  providedIn: 'root'
})
export class GoService {

//  private webconfig: Webconfig = {serviceUrl: '/go'};
  private loginInfo: LoginInfo = {};

  constructor(private http: HttpClient) {
    console.log( 'GoService.constructor()' );
  }

  setLoginInfo(params: LoginInfo) {
    this.loginInfo = params;
  }

  getKeyInfo(): Observable<Httpresult> {
    return this.http.post<Httpresult>(`${this.getServiceUrl()}/go/keyinfo`, this.getLoginInfo());
  }

  getLoginInfo(): LoginInfo {
    return this.loginInfo;
  }

  getMenu(login: string, password: string): Observable<IGoMenu> {
    return this.http.post<IGoMenu>(`${this.getServiceUrl()}/go/menu`, {
      login, password
    });
  }

  getTfn(tfnnum: string): Observable<ITfn[]> {
    if(tfnnum) {
      return this.http.get<ITfn[]>(`${this.getServiceUrl()}/go/tfn/${tfnnum}`);
    }
    return this.http.get<ITfn[]>(`${this.getServiceUrl()}/go/tfn/0`);
  }

  getTfnList(tfn: ITfn): Observable<Httpresult> {
    tfn = tfn || {}
    console.log('getTfnList')
    return this.http.post<Httpresult>(`${this.getServiceUrl()}/go/tfnlist`, tfn);
  }

  getTfnWaitList(tfn: ITfn): Observable<Httpresult> {
    tfn = tfn || {}
    console.log('getTfnWaitList')
    return this.http.post<Httpresult>(`${this.getServiceUrl()}/go/tfnwaitlist`, tfn);
  }

  getWaMainInfo(): Observable<Httpresult> {
    const info: IWaMainInfo = {
      idgo_ptn: this.loginInfo.user?.idgo_ptn,
      idgo_user: this.loginInfo.user?.idgo_user
    }
    return this.http.post<Httpresult>(`${this.getServiceUrl()}/go/wamaininfo`, info);
  }

  getLimits(bnkid: string): Observable<Httpresult> {
    console.log('service.getLimits')
    const url = `${this.getServiceUrl()}/go/bnklimits/${bnkid}`;
    return this.http.post<Httpresult>(url,{});
  }

  // // отладочный вариант
  // getHttpTfnList(tfn: ITfn): Observable<Httpresult> {
  //   tfn = tfn || {}
  //   console.log('getTfnList')
  //   return this.http.post<Httpresult>(`${this.getServiceUrl()}/go/httptfnlist`, tfn);
  // }

  getServiceUrl(): string {
    console.log(`ServiceUrl: ${EnvUtils.getServiceUrl()}`);
    return EnvUtils.getServiceUrl();
  }

}
