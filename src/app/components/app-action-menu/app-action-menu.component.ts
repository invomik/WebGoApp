import {Component, Input, OnInit} from '@angular/core';
import {IGoMenu, IGoMenuItem} from '../../gomodel/gomenu';
import {GoService} from '../../servises/go.service';
import {MatRadioChange} from '@angular/material/radio';
import {Router} from '@angular/router';
import {GoReferenciesService} from '../../servises/go.referencies.service';
import {LoginInfo} from '../../gomodel/loginInfo';
import {ILimit} from '../../gomodel/entities/ILimit';
import {IWaMainInfo} from '../../gomodel/entities/IWaMainInfo';

@Component({
  selector: 'app-action-menu',
  templateUrl: './app-action-menu.component.html',
  styleUrls: ['./app-action-menu.component.scss']
})
export class AppActionMenuComponent implements OnInit {

  @Input() menu: IGoMenu = {};

  loginInfo: LoginInfo = {};
  limits: ILimit[] = [];
  waMainInfo: IWaMainInfo = {};

  constructor(private goService: GoService, public goRefService: GoReferenciesService, private router: Router) { }

  ngOnInit(): void {
    console.log('initMenu')
    this.loginInfo = this.goService.getLoginInfo();
    this.limits = this.goRefService.getBnkLimits();
    this.waMainInfo = this.goRefService.getWaMainInfo();
  }

  onChanged(event: IGoMenuItem): void {
    this.router.navigate([`/${event.scp_ALIAS}`]).catch(reason => {
      this.router.navigate(['/']);
    });
    console.log(event.menuitem);
  }
}
