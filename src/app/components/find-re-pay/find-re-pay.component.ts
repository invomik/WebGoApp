import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatFormFieldAppearance} from '@angular/material/form-field';
import {ITfn} from '../../gomodel/entities/ITfn';
import {fieldappearance} from '../../shared/view_interface';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {Observer, of, Subscription} from 'rxjs';
import {GoService} from '../../servises/go.service';
import {query} from '@angular/animations';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-find-re-pay',
  templateUrl: './find-re-pay.component.html',
  styleUrls: ['./find-re-pay.component.scss']
})
export class FindRePayComponent implements OnInit, OnDestroy {

  inputAppearance: MatFormFieldAppearance = fieldappearance;

  tableTfnInfo = {
    displayedColumns: [
      'DTCREATE_RM', 'idgo_CUR', 'sumtfn', 's_CTYA3', 's_tfn_info', 'action'
    ],
  };

  searchData: ITfn = {};

  tfnDataSource: ITfn[] = [];

  knpControl: FormControl = new FormControl();
  knpControl$: Subscription;

  watchKnpControl(): Subscription {
    return this.knpControl.valueChanges
      .pipe(
        debounceTime(800),
        distinctUntilChanged(),
        switchMap(query => {
          console.log(`switchMap: ${query}`);
          return this.goService.getTfn(query);
        })
      )
      .subscribe(
        result => {
          console.log(result);
          console.log(`subscribe: ${result}`);
          this.tfnDataSource = result;
        },
          error => {
          console.log(error);
          this.knpControl$ = this.watchKnpControl();
        }
      );
  }

  constructor(private goService: GoService) {
    this.knpControl$ = this.watchKnpControl();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.knpControl$.unsubscribe();
  }

  findTfn(): void {

  }

  rePay(element: any) {

  }
}
