import {Component, OnDestroy, OnInit} from '@angular/core';
import {ITfn} from '../../gomodel/entities/ITfn';
import {MatFormFieldAppearance} from '@angular/material/form-field';
import {fieldappearance} from '../../shared/view_interface';

const TFN_DATA: ITfn[] = [
  {
    bnk_name: 'name1',
    dtcreate_rm: '22.02,21',
    r_fname: 'R_FNAME 1',
    r_lname: '',
    r_mname: '',
    s_ctya3: 'RUS',
    s_fname: '',
    s_lname: '',
    s_mname: '',
    sumtfn: '1111',
    tfnnum: '5000'
  },
  {
    bnk_name: 'name2',
    dtcreate_rm: '22.02,21',
    r_fname: 'R_FNAME',
    r_lname: '',
    r_mname: '',
    s_ctya3: 'RUS',
    s_fname: '',
    s_lname: '',
    s_mname: '',
    sumtfn: '1111',
    tfnnum: '5000'
  }

];

@Component({
  selector: 'app-find-pay-out',
  templateUrl: './find-pay-out.component.html',
  styleUrls: ['./find-pay-out.component.scss']
})
export class FindPayOutComponent implements OnInit, OnDestroy {

  inputAppearance: MatFormFieldAppearance = fieldappearance;

  tableTfnInfo = {
    displayedColumns: [
      'DTCREATE_RM', 'idgo_CUR', 'sumtfn', 's_CTYA3', 's_tfn_info', 'action'
    ]
  };

  tfnDataSource: ITfn[] = TFN_DATA;

  constructor() { }

  ngOnInit(): void {
    console.log('FindPayOutComponent init()')
  }

  ngOnDestroy() {
    console.log('FindPayOutComponent destroy')
  }

  payOut(element: any): void {
    console.log(element);
  }

  findTfn(): void {

  }


}
