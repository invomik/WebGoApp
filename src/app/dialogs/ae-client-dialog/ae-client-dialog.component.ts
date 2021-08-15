import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {IClient} from '../../gomodel/entities/IClient';
import {MatFormFieldAppearance} from '@angular/material/form-field';
import {fieldappearance} from '../../shared/view_interface';

export interface AedClientParam {
  title: '',
  mode: 'add' | 'edit' | 'del',
  client: IClient
}

@Component({
  selector: 'app-ae-client-dialog',
  templateUrl: './ae-client-dialog.component.html',
  styleUrls: ['./ae-client-dialog.component.scss']
})
export class AeClientDialogComponent implements OnInit {

  inputAppearance: MatFormFieldAppearance = fieldappearance;

  constructor(public dialogRef: MatDialogRef<AeClientDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: AedClientParam) { }

  ngOnInit(): void {

  }

  onOk() {
    console.log('OK!!!')
    this.dialogRef.close('true');
  }

}
