import { Component, OnInit } from '@angular/core';
import {MatFormFieldAppearance} from '@angular/material/form-field';
import {fieldappearance} from '../../shared/view_interface';
import {IClient} from '../../gomodel/entities/IClient';
import {GoReferenciesService} from '../../servises/go.referencies.service';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import {AeClientDialogComponent} from '../../dialogs/ae-client-dialog/ae-client-dialog.component';


@Component({
  selector: 'app-find-card-cust',
  templateUrl: './find-card-cust.component.html',
  styleUrls: ['./find-card-cust.component.scss']
})
export class FindCardCustComponent implements OnInit {

  inputAppearance: MatFormFieldAppearance = fieldappearance;

  clientTemplate: IClient = {};
  isLoadClient: boolean = false;

  clientList: IClient[] = [
    // {
    //   idgo_cnt: 'idgo_cnt',
    //   lname: 'lname',
    //   fname: 'fname',
    //   tdpname: 'Паспорт РФ',
    //   docser: 'Серия',
    //   docnum: 'Номер',
    //   phone: '+79153339031'
    // },
    // {
    //   idgo_cnt: 'idgo_cnt_1',
    //   lname: 'lname_1',
    //   fname: 'fname_1',
    //   tdpname: 'Паспорт РФ_1',
    //   docser: 'Серия_1',
    //   docnum: 'Номер_1',
    //   phone: '+79153339031_1'
    // }
    //
  ];

  tblClientColumns = [
    'idgo_cnt', 'lname', 'fname', 'tdpname', 'docser', 'docnum','phone', 'action'
  ];

  constructor(private refService: GoReferenciesService, public dialog: MatDialog) {
    this.clientTemplate = refService.getClientTemplate();
  }

  ngOnInit(): void {
  }

  findClient() {

    if(this.isLoadClient == true) return;

    this.refService.getClientList(
      this.clientTemplate.idgo_cnt,
      this.clientTemplate.migrcard,
      this.clientTemplate.lname,
      this.clientTemplate.fname,
      this.clientTemplate.docser,
      this.clientTemplate.docnum
      ).pipe(
        map(data=> {
          this.isLoadClient = false;
          return data;
        }),
        catchError(error => {
          console.log(error)
          return throwError(error)
        })
      ).subscribe(
      data => {
        console.log(data)
        this.clientList = data || [];
      },
      error => {
        console.log(error);
      }
     )

    console.log(this.clientTemplate);
  }

  //this.dialog.open(MyDialogComponent, {)


  editClient(client: IClient) {
    console.log(client)
    this.dialog.open(AeClientDialogComponent, {
      //panelClass: 'no-padding-dialog',
      width: '70%',
      disableClose: true,
      data: {
        title: 'Редактирование клиента',
        mode: 'edit',
        client
      }
    });
  }

  deleteClient(client: IClient) {
    this.dialog.open(AeClientDialogComponent, {
      width: '70%',
      //height: '600px',
      // minWidth: '200px',
      // maxWidth: '1024px',
      data: {
        title: 'Удаление клиента',
        mode: 'del',
        client
      }
    });
  }

  giveoutCard(client: IClient) {

  }

  deleteCard(element: IClient) {

  }

}
