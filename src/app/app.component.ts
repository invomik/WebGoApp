import {Component, OnInit} from '@angular/core';
import {IGoMenuItem, IGoMenu} from './gomodel/gomenu';
import {GoService} from './servises/go.service';
import {Webconfig} from './gomodel/webconfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'WebGoApp';

  goMenu: IGoMenu = {};

  constructor(private goService: GoService) {
  }

  ngOnInit(): void {

  }
}
