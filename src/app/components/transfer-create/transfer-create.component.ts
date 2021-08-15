import { Component, OnInit } from '@angular/core';
import {MatFormFieldAppearance} from '@angular/material/form-field';
import {fieldappearance} from '../../shared/view_interface';

@Component({
  selector: 'app-transfer-create',
  templateUrl: './transfer-create.component.html',
  styleUrls: ['./transfer-create.component.scss']
})
export class TransferCreateComponent implements OnInit {

  inputAppearance: MatFormFieldAppearance = fieldappearance;

  constructor() { }

  ngOnInit(): void {
  }

}
