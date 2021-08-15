import { Component, OnInit } from '@angular/core';
import {ChangePassword} from '../../gomodel/changePassword';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';

export const pswFormValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const newPsw = control.get('newPsw');
  const repeatPsw = control.get('repeatPsw');
  return newPsw && repeatPsw && newPsw.value === repeatPsw.value ? null: { error: 'Пароли не совпадают' };
};

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent implements OnInit {

  pswInfo: ChangePassword = {}

  form: FormGroup;

  constructor() {

    this.form = new FormGroup(
      {
      'oldPsw': new FormControl('', [Validators.required]),
      'newPsw': new FormControl('', Validators.required),
      'repeatPsw': new FormControl('', Validators.required)
      },
      {
        validators: pswFormValidator
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let date: Date = new Date("2021-04-27 10:12:06.0");
    console.log(date.toDateString());
    console.log(date.toString());

    date = new Date("2011-12-03T10:15:30");
    console.log(date.toDateString());
    console.log(date.toString());

    //2021-04-27 10:12:06.0
    this.pswInfo = this.form.value;
    console.log(this.pswInfo);
  }

}
