import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonsModule} from '../shared/commons.module';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AdminLayoutComponent } from './shared/comonents/admin-layout/admin-layout.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import {AuthService} from './shared/services/auth.service';

@NgModule({
  declarations: [AdminLayoutComponent, LoginPageComponent],
  imports: [
    CommonsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild([
      {
        path: '', component: AdminLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent}
        ]
      }
    ]),
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class AdminModule {

}
