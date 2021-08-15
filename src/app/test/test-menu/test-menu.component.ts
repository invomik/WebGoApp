import {Component, Input, OnInit} from '@angular/core';
import {IGoMenu} from '../../gomodel/gomenu';

@Component({
  selector: 'app-test-menu',
  templateUrl: './test-menu.component.html',
  styleUrls: ['./test-menu.component.scss']
})
export class TestMenuComponent implements OnInit {

  @Input() menu: IGoMenu = {};

  constructor() { }

  ngOnInit(): void {
  }

}
