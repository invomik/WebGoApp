import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IClient} from '../gomodel/entities/IClient';
import {HttpClient, HttpParams} from '@angular/common/http';
import {EnvUtils} from '../../environments/envUtils';
import {Httpresult} from '../gomodel/http/httpresult';
import {ITfn} from '../gomodel/entities/ITfn';
import {ICurrency} from '../gomodel/entities/ICurrency';
import {IDocType} from '../gomodel/entities/IDocType';
import {ICountry} from '../gomodel/entities/ICountry';
import {ITfnStatus} from '../gomodel/entities/ITfnStatus';
import {ILimit} from '../gomodel/entities/ILimit';
import {IWaMainInfo} from '../gomodel/entities/IWaMainInfo';
import {IUser} from '../gomodel/entities/IUser';

const clientTempl: IClient = {}

@Injectable({
  providedIn: 'root'
})
export class GoReferenciesService {

  usecurrencies: ICurrency[] = []
  doctypes: IDocType[] = []
  countries: ICountry[] = []
  tfnstatusList: ITfnStatus[] = []
  bnkLimitList: ILimit[] = []
  waMainInfo: IWaMainInfo = {};

  constructor(private http: HttpClient) {
    console.log( 'GoReferenciesService.constructor()' );
  }

  getBnkLimits(): ILimit[] {
    return this.bnkLimitList;
  }

  setBnkLimits(limits: ILimit[]): void {
    this.bnkLimitList = limits;
  }

  getClientTemplate(): IClient {
    return clientTempl;
  }

  getClientList(
  id: string | undefined,
  carta: string | undefined,
  lname: string | undefined,
  fname: string | undefined,
  docser: string | undefined,
  docnum: string | undefined): Observable<IClient[]> {

    let params: HttpParams = new HttpParams();

    params = params
      .append('id',id || '')
      .append('carta',carta || '')
      .append('lname', lname || '')
      .append('fname', fname || '')
      .append('docser',docser || '')
      .append('docnum', docnum || '')

    console.log('PARAMS' + JSON.stringify(params));

    return this.http.get<IClient[]>(`${EnvUtils.getServiceUrl()}/go/clientlist`,
      {
        params
      });
  }

  getBnkPointList(bnkid: string | undefined | null): Observable<Httpresult> {
    return this.http.get<Httpresult>(`${this.getServiceUrl()}/go/bnkpointlist/${bnkid}`);
    if(bnkid) {
      this.http.get<Httpresult>(`${this.getServiceUrl()}/go/bnkpointlist/${bnkid}`);
    } else {
      this.http.get<Httpresult>(`${this.getServiceUrl()}/go/bnkpointlist/0`);
    }
  }

  getNewsList(): Observable<Httpresult> {
    let params: HttpParams = new HttpParams();
    console.log('PARAMS' + JSON.stringify(params));
    return this.http.get<Httpresult>(`${EnvUtils.getServiceUrl()}/go/newslist`);
  }

  getBnkUserList(): Observable<Httpresult> {

    let params: HttpParams = new HttpParams();

    params = params.append('bankid',this.getWaMainInfo().idgo_bnk || '');

    console.log('PARAMS' + JSON.stringify(params));

    return this.http.get<Httpresult>(`${EnvUtils.getServiceUrl()}/go/userlist`,
      {
        params
      });
  }

  getBnkAttrList(isunl: string): Observable<Httpresult> {

    let params: HttpParams = new HttpParams();

    params = params.append('bnkid',this.getWaMainInfo().idgo_bnk || '').
                    append('isunl', isunl || '0');

    console.log('PARAMS' + JSON.stringify(params));

    return this.http.get<Httpresult>(`${EnvUtils.getServiceUrl()}/go/bnkattrlist`,
      {
        params
      });
  }

  getUserList(): Observable<Httpresult> {
    let params: HttpParams = new HttpParams();
    console.log('PARAMS' + JSON.stringify(params));
    return this.http.get<Httpresult>(`${EnvUtils.getServiceUrl()}/go/userlist`);
  }

  getCountryList(): Observable<Httpresult> {
    return this.http.get<Httpresult>(`${this.getServiceUrl()}/go/countries`);
  }

  getDoctypeList(): Observable<Httpresult> {
    return this.http.get<Httpresult>(`${this.getServiceUrl()}/go/doctypes`);
  }

  getUseCurrensies(): Observable<Httpresult> {
    return this.http.get<Httpresult>(`${this.getServiceUrl()}/go/usecurrensies`);
  }

  getTfnStatusList(): Observable<Httpresult> {
    return this.http.get<Httpresult>(`${this.getServiceUrl()}/go/tfnstatuses`);
  }

  getServiceUrl(): string {
    console.log(`ServiceUrl: ${EnvUtils.getServiceUrl()}`);
    return EnvUtils.getServiceUrl();
  }

  set useCurrencies(_currensies: ICurrency[]) {
    this.usecurrencies = _currensies
  }

  get useCurrencies(): ICurrency[] {
    return this.usecurrencies;
  }

  set countryList(_countries: ICountry[]) {
    this.countries = _countries;
  }

  get countryList(): ICountry[] {
    return this.countries;
  }

  set docTypeList(_doctypes: IDocType[]) {
    this.doctypes = _doctypes;
  }

  get docTypeList(): IDocType[] {
    return this.doctypes;
  }

  set tfnStatuses(_statuses: ITfnStatus[]) {
    this.tfnstatusList = _statuses;
  }

  get tfnStatuses(): ITfnStatus[] {
    return this.tfnstatusList;
  }

  setWaMainInfo(data: IWaMainInfo) {
    this.waMainInfo = data;
  }

  getWaMainInfo(): IWaMainInfo {
    return this.waMainInfo;
  }
}
