import { Component, OnInit } from '@angular/core';
import {ITfn} from '../../gomodel/entities/ITfn';
import {CommandRenderer} from '../locked-tfn/CommandRenderer';
import {map} from 'rxjs/operators';
import {Httpresult} from '../../gomodel/http/httpresult';
import {GoReferenciesService} from '../../servises/go.referencies.service';
import {GoService} from '../../servises/go.service';

@Component({
  selector: 'app-wait-pay',
  templateUrl: './wait-pay.component.html',
  styleUrls: ['./wait-pay.component.scss']
})
export class WaitPayComponent implements OnInit {

  private gridApi : any;
  private gridColumnApi : any;

  rowTfn: ITfn[] = [];
  public defaultColDef = {
    maxWidth: 200,
    headerHeight: 30,
    sortable: true,
    resizable: true,
    cellClass: ['table-cell'],
    cellStyle: { 'line-height': '23px'}
  };

  colDefs = [
    { headerName: 'ID', field: 'idgo_tfn', width: 100 },
    { headerName: 'Дата', field: 's_dt', width: 150 },
    { headerName: 'Валюта', field: 'idgo_cur', width: 90 },
    { headerName: 'Сумма', field: 'sumtfn', width: 100, type: 'numericColumn' },
    { headerName: 'Страна/Город', field: 'd_ctya3',width: 90},
    { headerName: 'Данные перевода', field: 'info', width: 250}
    // { headerName: 'Дейст.', field: 's_lname', pinned: 'right',
    //   width: 5,
    //   cellRenderer: CommandRenderer,
    //   commandListener: (params: any) =>  console.log('Данные перевода')
    // },
  ];

  constructor(private goService: GoService) { }

  ngOnInit(): void {
  }

  onTfnGridReady(params: any) {

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.gridApi.setHeaderHeight(35);

    //this.autoSizeAll(this.gridColumnApi, false)

    this.goService.getTfnWaitList({})
      .pipe(
        map<Httpresult, ITfn[]>(data=> {
          return data.data || [];
        })
      )
      .subscribe( result=> {
        this.rowTfn = result;
        console.log(result)
      })
  }


}
