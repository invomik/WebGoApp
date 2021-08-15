import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestMenuComponent } from './test/test-menu/test-menu.component';
import {FormsModule} from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

import {
//  MatAccordion,
  MatExpansionModule,
  // MatExpansionPanel,
  // MatExpansionPanelHeader,
  // MatExpansionPanelTitle
} from '@angular/material/expansion';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { AppActionMenuComponent } from './components/app-action-menu/app-action-menu.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { FindPayOutComponent } from './components/find-pay-out/find-pay-out.component';
import { FindRePayComponent } from './components/find-re-pay/find-re-pay.component';
import {MatCardModule} from '@angular/material/card';
import { TransferCreateComponent } from './components/transfer-create/transfer-create.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {CommonsModule} from './shared/commons.module';
import {AuthGuard} from './servises/auth.guard';
import {AuthService} from './admin/shared/services/auth.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterseptor} from './auth.interseptor';
import { FindCardCustComponent } from './components/find-card-cust/find-card-cust.component';
import { AdmFindSpoComponent } from './components/adm-find-spo/adm-find-spo.component';
import { WaitPayComponent } from './components/wait-pay/wait-pay.component';
import { LastTfnComponent } from './components/last-tfn/last-tfn.component';
import { AdmReportsListComponent } from './components/adm-reports-list/adm-reports-list.component';
import { FindEditOrderComponent } from './components/find-edit-order/find-edit-order.component';
import { FindSPOComponent } from './components/find-spo/find-spo.component';
import { LockedTfnComponent } from './components/locked-tfn/locked-tfn.component';
import { ReportsListComponent } from './components/reports-list/reports-list.component';
import { MailListComponent } from './components/mail-list/mail-list.component';
import { PointsListComponent } from './components/points-list/points-list.component';
import { NewsLastMonthComponent } from './components/news-last-month/news-last-month.component';
import { ExportPrefComponent } from './components/export-pref/export-pref.component';
import { ExportRegPrefComponent } from './components/export-reg-pref/export-reg-pref.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ChangePassComponent } from './components/change-pass/change-pass.component';
import { KeyInfoComponent } from './components/key-info/key-info.component';
import {MatTableModule} from '@angular/material/table';
import {MatTooltip, MatTooltipModule} from '@angular/material/tooltip';
import { AeClientDialogComponent } from './dialogs/ae-client-dialog/ae-client-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {AgGridModule} from 'ag-grid-angular';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { InvProgressSpinnerComponent } from './helpcomponents/inv-progress-spinner/inv-progress-spinner.component';
import {CdkTreeModule} from '@angular/cdk/tree';
import {TreeModule} from '@circlon/angular-tree-component';

const INTERSEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterseptor
};

@NgModule({
  declarations: [
    AppComponent,
    TestMenuComponent,
    HomePageComponent,
    AppActionMenuComponent,
    MainLayoutComponent,
    FindPayOutComponent,
    FindRePayComponent,
    TransferCreateComponent,
    FindCardCustComponent,
    AdmFindSpoComponent,
    WaitPayComponent,
    LastTfnComponent,
    AdmReportsListComponent,
    FindEditOrderComponent,
    FindSPOComponent,
    LockedTfnComponent,
    ReportsListComponent,
    MailListComponent,
    PointsListComponent,
    NewsLastMonthComponent,
    ExportPrefComponent,
    ExportRegPrefComponent,
    UserListComponent,
    ChangePassComponent,
    KeyInfoComponent,
    AeClientDialogComponent,
    InvProgressSpinnerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatSliderModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CdkTreeModule,
    TreeModule,
    DragDropModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    AuthService,
    AuthGuard,
    INTERSEPTOR_PROVIDER,
    {provide: MAT_DATE_LOCALE, useValue: 'ru'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
