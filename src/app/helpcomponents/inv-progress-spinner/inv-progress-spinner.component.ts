import {Component, Input, OnInit} from '@angular/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-inv-progress-spinner',
  templateUrl: './inv-progress-spinner.component.html',
  styleUrls: ['./inv-progress-spinner.component.scss']
})
export class InvProgressSpinnerComponent implements OnInit {

  @Input() value : number = 100;
  @Input() diameter: number = 70;
  @Input() mode : ProgressSpinnerMode ="indeterminate";
  //@Input() mode : string ="indeterminate";
  @Input() strokeWidth : number = 5;
  @Input() overlay: boolean = false;
  @Input() color: string = "primary";

  constructor() { }

  ngOnInit(): void {
  }

}
