import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {FindPayOutComponent} from './components/find-pay-out/find-pay-out.component';
import {FindRePayComponent} from './components/find-re-pay/find-re-pay.component';
import {TransferCreateComponent} from './components/transfer-create/transfer-create.component';
import {AuthGuard} from './servises/auth.guard';
import {FindCardCustComponent} from './components/find-card-cust/find-card-cust.component';
import {AdmFindSpoComponent} from './components/adm-find-spo/adm-find-spo.component';
import {LastTfnComponent} from './components/last-tfn/last-tfn.component';
import {WaitPayComponent} from './components/wait-pay/wait-pay.component';
import {AdmReportsListComponent} from './components/adm-reports-list/adm-reports-list.component';
import {FindEditOrderComponent} from './components/find-edit-order/find-edit-order.component';
import {FindSPOComponent} from './components/find-spo/find-spo.component';
import {LockedTfnComponent} from './components/locked-tfn/locked-tfn.component';
import {ReportsListComponent} from './components/reports-list/reports-list.component';
import {MailListComponent} from './components/mail-list/mail-list.component';
import {PointsListComponent} from './components/points-list/points-list.component';
import {NewsLastMonthComponent} from './components/news-last-month/news-last-month.component';
import {ExportPrefComponent} from './components/export-pref/export-pref.component';
import {ExportRegPrefComponent} from './components/export-reg-pref/export-reg-pref.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {ChangePassComponent} from './components/change-pass/change-pass.component';
import {KeyInfoComponent} from './components/key-info/key-info.component';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent, children: [

        //   {path: 'SCP_GO_WEB_FINDPAYOUT', component: FindPayOutComponent, canActivate: [AuthGuard]},
        //   {path: 'SCP_GO_WEB_REPAY', component: FindRePayComponent, canActivate: [AuthGuard]},
        //   {path: 'SCP_GO_WEB_CREATE', component: TransferCreateComponent, canActivate: [AuthGuard]},
        //   {path: 'SCP_GO_WEB_CUST', component: FindCardCustComponent, canActivate: [AuthGuard]},
        //   {path: 'SCP_GO_WEB_ADMIN_SPO', component: AdmFindSpoComponent, canActivate: [AuthGuard]},
        //   {path: 'SCP_GO_WEB_LAST', component: LastTfnComponent, canActivate: [AuthGuard]},
        //   {path: 'SCP_GO_WEB_WAIT_PAY', component: WaitPayComponent, canActivate: [AuthGuard]},
        //   {path: 'SCP_GO_WEB_ADMIN_REPORTS_LIST', component: AdmReportsListComponent, canActivate: [AuthGuard]},
        //
        //   {path: 'SCP_GO_WEB_FIND_EDIT_ORDER', component: FindEditOrderComponent, canActivate: [AuthGuard]},
        //   {path: 'SCP_GO_WEB_SPO', component: FindSPOComponent, canActivate: [AuthGuard]},
        //   {path: 'SCP_GO_WEB_LOCKED', component: LockedTfnComponent, canActivate: [AuthGuard]},
        //   {path: 'SCP_GO_WEB_REPORTS_LIST', component: ReportsListComponent, canActivate: [AuthGuard]},
        //
        //   {path: 'SCP_GO_WEB_MAIL_LIST', component: MailListComponent, canActivate: [AuthGuard]},
        //   {path: 'SCP_GO_WEB_POINTS_LIST', component: PointsListComponent, canActivate: [AuthGuard]},
        //   {path: 'SCP_GO_WEB_NEWS_MONTH', component: NewsLastMonthComponent, canActivate: [AuthGuard]},
        //   {path: 'SCP_GO_WEB_ADMIN_EXPORT', component: ExportPrefComponent, canActivate: [AuthGuard]},
        //   {path: 'SCP_GO_WEB_ADMIN_EXPORT_INPUT', component: ExportRegPrefComponent, canActivate: [AuthGuard]},
        //
        //   {path: 'SCP_GO_WEB_ADMIN_USER_LIST', component: UserListComponent, canActivate: [AuthGuard]},
        //   {path: 'SCP_GO_WEB_CH_PASS', component: ChangePassComponent, canActivate: [AuthGuard]},
        //   {path: 'SCP_GO_WEB_KEY_INFO', component: KeyInfoComponent, canActivate: [AuthGuard]},
        //
        // ], canActivate: [AuthGuard]},

        //отладка

          {path: 'SCP_GO_WEB_FINDPAYOUT', component: FindPayOutComponent},
          {path: 'SCP_GO_WEB_REPAY', component: FindRePayComponent},
          {path: 'SCP_GO_WEB_CREATE', component: TransferCreateComponent},
          {path: 'SCP_GO_WEB_CUST', component: FindCardCustComponent},
          {path: 'SCP_GO_WEB_ADMIN_SPO', component: AdmFindSpoComponent},
          {path: 'SCP_GO_WEB_LAST', component: LastTfnComponent},
          {path: 'SCP_GO_WEB_WAIT_PAY', component: WaitPayComponent},
          {path: 'SCP_GO_WEB_ADMIN_REPORTS_LIST', component: AdmReportsListComponent},

          {path: 'SCP_GO_WEB_FIND_EDIT_ORDER', component: FindEditOrderComponent},
          {path: 'SCP_GO_WEB_SPO', component: FindSPOComponent},
          {path: 'SCP_GO_WEB_LOCKED', component: LockedTfnComponent},
          {path: 'SCP_GO_WEB_REPORTS_LIST', component: ReportsListComponent},

          {path: 'SCP_GO_WEB_MAIL_LIST', component: MailListComponent},
          {path: 'SCP_GO_WEB_POINTS_LIST', component: PointsListComponent},
          {path: 'SCP_GO_WEB_NEWS_MONTH', component: NewsLastMonthComponent},
          {path: 'SCP_GO_WEB_ADMIN_EXPORT', component: ExportPrefComponent},
          {path: 'SCP_GO_WEB_ADMIN_EXPORT_INPUT', component: ExportRegPrefComponent},

          {path: 'SCP_GO_WEB_ADMIN_USER_LIST', component: UserListComponent},
          {path: 'SCP_GO_WEB_CH_PASS', component: ChangePassComponent},
          {path: 'SCP_GO_WEB_KEY_INFO', component: KeyInfoComponent},

        ]},
    ]

  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
