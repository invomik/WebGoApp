import {Component, Input, OnInit} from '@angular/core';
import {IGoMenu} from '../../gomodel/gomenu';
import {GoService} from '../../servises/go.service';
import {switchMap} from 'rxjs/operators';
import {GoReferenciesService} from '../../servises/go.referencies.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  menu: IGoMenu = {};
  isMenuLoding: boolean = false;

  constructor(private goService: GoService, public goRefService: GoReferenciesService) { }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.isMenuLoding = true;
    this.initLimits()
    this.goService.getMenu('EM', '1').subscribe(
      menu => {
        this.isMenuLoding = false;
        this.menu = menu;
      },
      menuError => {
        this.isMenuLoding = false;
        console.log(menuError);
      }
    );
  }

  private initLimits() {
    console.log('initLimits')
    this.goService.getWaMainInfo()
      .subscribe(resp=> {
        console.log(resp)
        this.goRefService.setWaMainInfo(resp.data)
        this.goService.getLimits(resp.data.idgo_bnk)
          .subscribe(
            data=> {
              this.goRefService.setBnkLimits(data.data)
              console.log(data)
            },
            error => {
              console.log(error)
            }
          )
      },
        error => {

          console.log(error)
        })
  }
}
