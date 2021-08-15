import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatFormFieldAppearance} from '@angular/material/form-field';
import {fieldappearance} from '../../shared/view_interface';
import {ITfn} from '../../gomodel/entities/ITfn';
import {BehaviorSubject, Observable, Subject, Subscribable, Subscription, throwError} from 'rxjs';
import {GoService} from '../../servises/go.service';
import {catchError, debounceTime, distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';
import {Httpresult} from '../../gomodel/http/httpresult';
import {GoReferenciesService} from '../../servises/go.referencies.service';
import {ICurrency} from '../../gomodel/entities/ICurrency';
import {IDocType} from '../../gomodel/entities/IDocType';
import {ICountry} from '../../gomodel/entities/ICountry';

@Component({
  selector: 'app-find-spo',
  templateUrl: './find-spo.component.html',
  styleUrls: ['./find-spo.component.scss']
})
export class FindSPOComponent implements OnInit, OnDestroy {

  inputAppearance: MatFormFieldAppearance = fieldappearance;

  // usecurrencies: ICurrency[] = []
  // doctypes: IDocType[] = []
  // countries: ICountry[] = []

  private subjSearch$: BehaviorSubject<ITfn>;
  private search$: Subscription;

  isLoding: boolean = false;

  searchData: ITfn = {};

  tfnTableColumns = [
    'dtcreate_rm',
    'idgo_cur',
    'sumtfn',
    's_ctya3',
    'tfn_data',
    'action'
  ];

  tfnDataSource: ITfn[] = [];

  constructor(private goService: GoService, public goRefService: GoReferenciesService) {

    this.subjSearch$ = new BehaviorSubject<ITfn>({});

    this.search$ = this.subjSearch$.asObservable().pipe(
      debounceTime(800),
      switchMap<ITfn, Observable<Httpresult>>(query => {
        this.isLoding = true;
        return this.goService.getTfnList(query);
      })
    ).pipe(
      map<Httpresult,ITfn[]>(data=> {
        return data.data || [];
      })
    ).subscribe(data=> {
      console.log('http result');
      this.isLoding = false;
      this.tfnDataSource = data
    })

  }

  ngOnDestroy(): void {
    this.search$.unsubscribe();
  }

  ngOnInit(): void {
    //this.search$.
  }

  onTfnGridReady(params: any) {

    console.log(params);
    // this.gridApi = params.api;
    // this.gridColumnApi = params.columnApi;
  }

  showTfnList(element: ITfn) {
    console.log('showTfnList')
    this.subjSearch$.next(element)
  }

  lockTfn(element: ITfn): void {

  }

  printTfnDoc(element: ITfn): void  {

  }

  printTfnEditDoc(element: ITfn): void {

  }

  exportTfn(element: ITfn): void {

  }

  getTfnData(tfn: ITfn) {
    return `${tfn.s_lname} ${tfn.s_fname} ${tfn.s_mname} ${tfn.bnk_name}
    ${tfn.r_lname} ${tfn.r_fname} ${tfn.r_mname}
    `
  }

  // private initReferencies() {
  //
  //   console.log('initReferencies')
  //
  //   this.goRefService.getDoctypeList().
  //   pipe(
  //     map<Httpresult, IDocType[] >( data => {
  //       return data.data || []
  //     })
  //   ).subscribe(data=> {
  //     console.log('getDoctypeList')
  //     console.log(data)
  //   })
  //
  //   this.goRefService.getCountryList().
  //     pipe(
  //       map<Httpresult, ICountry[] >( data => {
  //         return data.data || []
  //       })
  //     ).subscribe(data=> {
  //       console.log('getCountryList')
  //       console.log(data)
  //   })
  //
  //   this.goRefService.getUseCurrensies().
  //   pipe(
  //     map<Httpresult, ICurrency[] >( data => {
  //       return data.data || []
  //     })
  //   ).subscribe(data=> {
  //     console.log('getUseCurrensies')
  //     console.log(data)
  //   })
  //
  // }

}
