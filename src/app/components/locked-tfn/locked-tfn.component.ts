import { Component, OnInit } from '@angular/core';
import {ITfn} from '../../gomodel/entities/ITfn';
import {GoService} from '../../servises/go.service';
import {map} from 'rxjs/operators';
import {Httpresult} from '../../gomodel/http/httpresult';
import {CommandRenderer} from './CommandRenderer';

@Component({
  selector: 'app-locked-tfn',
  templateUrl: './locked-tfn.component.html',
  styleUrls: ['./locked-tfn.component.scss']
})
export class LockedTfnComponent implements OnInit {

  private gridApi : any;
  private gridColumnApi : any;

  public defaultColDef = {
    //initialWidth: 200,
//    minWidth: 50,
    maxWidth: 200,
    headerHeight: 30,
    sortable: true,
    resizable: true,
    cellClass: ['table-cell'],
    cellStyle: { 'line-height': '23px'}
  };

  colDefs = [
    {
      headerName: 'Дата', field: 'dtcreate_rm',
      width: 150,
      minWidth: 50,
      maxWidth: 150
    },
    { headerName: 'Валюта', field: 'idgo_cur', width: 90 },
    { headerName: 'Сумма', field: 'sumtfn', width: 180, type: 'numericColumn' },
    { headerName: 'Страна/Город', field: 's_tfnctya3'},
    { headerName: 'Дейст.', field: 's_lname', pinned: 'right',
      width: 5,
      cellRenderer: CommandRenderer,
      commandListener: (params: any) =>  console.log('Данные перевода')
    },
  ];

  rowTfn: ITfn[] = [
  ];

  constructor(private goService: GoService) { }

  ngOnInit(): void {
  }

  // clickTest(event: any) {
  //   console.log(event)
  // }

  autoSizeAll(columnApi: any, skipHeader: any) {
    let allColumnIds: any[] = [];
    this.gridColumnApi.getAllColumns().forEach(function (column:any) {
      allColumnIds.push(column.colId);
    });
    columnApi.autoSizeColumns(allColumnIds, skipHeader);
  }

  onTfnGridReady(params: any) {

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.gridApi.setHeaderHeight(35);

    this.autoSizeAll(this.gridColumnApi, false)

    this.goService.getTfnList({catstatus: '-1'})
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
