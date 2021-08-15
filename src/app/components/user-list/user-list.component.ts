import { Component, OnInit } from '@angular/core';
import {IUser} from '../../gomodel/entities/IUser';
import {GoReferenciesService} from '../../servises/go.referencies.service';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {CommandRenderer} from '../locked-tfn/CommandRenderer';
import {Httpresult} from '../../gomodel/http/httpresult';
import {ITfn} from '../../gomodel/entities/ITfn';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: IUser[] = [];
  private gridApi : any;
  private gridColumnApi : any;

  public defaultColDef = {
    maxWidth: 300,
    headerHeight: 30,
    sortable: true,
    resizable: true,
    cellClass: ['table-cell'],
    cellStyle: { 'line-height': '23px'}
  };

  colDefs = [
    {
      headerName: 'Логин', field: 'usrlogin',
      pinned: 'left',
      width: 150,
    },
    { headerName: 'Фамилия', field: 'l_name', width: 150, pinned: 'left'},
    { headerName: 'Имя', field: 'f_name', width: 90, type: 'numericColumn' },
    { headerName: 'Отчество', field: 'm_name', width: 90},
    { headerName: 'Роль', field: 'role_name', width: 90},
    { headerName: 'Статус', field: 'status_name', width: 70},
    { headerName: 'Сертификат', field: 'cert_name', width: 120, pinned: 'right'}

  ];

  constructor(private goRefService: GoReferenciesService) {

  }

  onUserGridReady(params: any) {

    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.gridApi.sizeColumnsToFit();

    this.gridApi.setHeaderHeight(35);

    this.autoSizeAll(this.gridColumnApi, false)

    this.goRefService.getUserList()
      .pipe(
        map(data => {
          return data.data;
        }),
        catchError(error => {
          console.log(error)
          return throwError(error)
        })
      ).subscribe(
      data => {
        console.log(data)
        this.users = data || [];
      },
      error => {
        console.log(error);
      }
    )
  }

  autoSizeAll(columnApi: any, skipHeader: any) {
    let allColumnIds: any[] = [];
    this.gridColumnApi.getAllColumns().forEach(function (column:any) {
      allColumnIds.push(column.colId);
    });
    columnApi.autoSizeColumns(allColumnIds, skipHeader);
  }

  ngOnInit(): void {

  }

}
