import { Component, OnInit } from '@angular/core';
import {GoReferenciesService} from '../../../servises/go.referencies.service';
import {map} from 'rxjs/operators';
import {ICountry} from '../../../gomodel/entities/ICountry';
import {Httpresult} from '../../../gomodel/http/httpresult';
import {IDocType} from '../../../gomodel/entities/IDocType';
import {ICurrency} from '../../../gomodel/entities/ICurrency';
import {ITfnStatus} from '../../../gomodel/entities/ITfnStatus';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  // countries: ICountry[] = [];
  // doctypes: IDocType[] = [];
  // usecurrencies: ICurrency[] = [];

  constructor(private goRefService: GoReferenciesService) {

  }

  ngOnInit(): void {
    this.initReferencies();
  }


  private initReferencies() {

    console.log('initReferencies')

    this.goRefService.getDoctypeList().
    pipe(
      map<Httpresult, IDocType[] >( data => {
        return data.data || []
      })
    ).subscribe(data=> {
      console.log('getDoctypeList')
      console.log(data)
      this.goRefService.useCurrencies = data;
    })

    this.goRefService.getCountryList().
      pipe(
        map<Httpresult, ICountry[] >( data => {
          return data.data || []
        })
      ).subscribe(data=> {
        console.log('getCountryList')
        console.log(data)
        this.goRefService.useCurrencies = data;
    })

    this.goRefService.getUseCurrensies().
    pipe(
      map<Httpresult, ICurrency[] >( data => {
        return data.data || []
      })
    ).subscribe(data=> {
      console.log('getUseCurrensies')
      console.log(data)
      this.goRefService.useCurrencies = data;
    })

    this.goRefService.getTfnStatusList().
    pipe(
      map<Httpresult, ITfnStatus[] >( data => {
        return data.data || []
      })
    ).subscribe(data=> {
      console.log('getTfnStatusList')
      console.log(data)
      this.goRefService.tfnStatuses = data;
    })

  }

}
