import { Component, OnInit } from '@angular/core';
import {INews} from '../../gomodel/entities/INews';
import {GoReferenciesService} from '../../servises/go.referencies.service';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-news-last-month',
  templateUrl: './news-last-month.component.html',
  styleUrls: ['./news-last-month.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

})
export class NewsLastMonthComponent implements OnInit {

  dataSource: INews[] = [];
  //columnsToDisplay: IColumn[] = [{title: 'Новость', field: 'title'}];
  columnsToDisplay = ['title','date'];
  expandedElement: INews | null = null;

  constructor(private goRefService: GoReferenciesService) { }

  ngOnInit(): void {
    this.goRefService.getNewsList()
      .pipe(
        map(data => {
          return data.data;
        }),
        catchError(error => {
          console.log(error)
          return throwError(error)
        })
      ).subscribe(
      data => {
        console.log(data)
        this.dataSource = data || [];
      },
      error => {
        console.log(error);
      }
    )
  }

}

export interface IColumn {
  title: string,
  field: string
}
