import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {IPoint} from '../../gomodel/entities/IPoint';
import {GoReferenciesService} from '../../servises/go.referencies.service';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {GoService} from '../../servises/go.service';
import {NestedTreeControl} from '@angular/cdk/tree';
import {ArrayDataSource} from '@angular/cdk/collections';
import {ITreeOptions} from '@circlon/angular-tree-component';
import {IBnkAttr} from '../../gomodel/entities/IBnkAttr';

@Component({
  selector: 'app-export-pref',
  templateUrl: './export-pref.component.html',
  styleUrls: ['./export-pref.component.scss']
})
export class ExportPrefComponent implements OnInit {

  points: IPoint[] = [];

  linkAttrs: IBnkAttr[] = [];
  unLinkAttrs: IBnkAttr[] = [];

  linkAttrsTmp = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  unLinkAttrsTmp = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  optionsPointsTree: ITreeOptions = {
    displayField: 'name',
    idField: '_id',
    childrenField: 'children',
    nodeClass: (node) => node.data.name
  };

  // treeControl = new NestedTreeControl<IPoint> (node => node.children);
  // dataSource = new ArrayDataSource(this.points);
  //
  // hasChild = (_: number, node: IPoint) => !!node.children && node.children.length > 0;

  constructor(private goRefService: GoReferenciesService, private goService: GoService) { }

  ngOnInit(): void {

    this.goRefService.getWaMainInfo().idgo_bnk;

    console.log('export-pref onInit')

    this.goRefService.getBnkPointList(this.goRefService.getWaMainInfo().idgo_bnk)
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
        this.points = data || [];
      },
      error => {
        console.log(error);
      }
    )

    this.initLinkAttrs();
    this.initUnLinkAttrs();

  }

  initLinkAttrs(): void {
    this.goRefService.getBnkAttrList('0')
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
        this.linkAttrs = data || [];
      },
      error => {
        console.log(error);
      }
    )
  }

  initUnLinkAttrs(): void {
    this.goRefService.getBnkAttrList('1')
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
        this.unLinkAttrs = data || [];
      },
      error => {
        console.log(error);
      }
    )
  }

  drop(event: CdkDragDrop<IBnkAttr[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
