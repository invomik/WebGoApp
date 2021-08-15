import { Component, OnInit } from '@angular/core';
import {GoService} from '../../servises/go.service';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-key-info',
  templateUrl: './key-info.component.html',
  styleUrls: ['./key-info.component.scss']
})
export class KeyInfoComponent implements OnInit {

  keyInfo: string = '';

  constructor(private goService: GoService) { }

  ngOnInit(): void {
    this.goService.getKeyInfo().pipe(
      map(data=> {
        return data.data;
      }),
      catchError(error => {
        console.log(error)
        return throwError(error)
      })
    ).subscribe(
      data => {
        console.log(data)
        this.keyInfo = data || '';
      },
      error => {
        this.keyInfo = error || '';
      }
    )
  }

}
