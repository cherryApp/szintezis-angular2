import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserService } from './service/user.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { TableFilterPipe } from './table-filter.pipe';
import { MyIfDirective } from './my-if.directive';
import { SorterDirective } from './sorter.directive';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ConfigService } from './service/config.service';
import { CrudTableComponent } from './crud-table/crud-table.component';
import { CrudSortPipe } from './crud-table/crud-sort.pipe';
import { IssueComponent } from './issue/issue.component';
import { IssueService } from './service/issue.service';
import { LoginComponent } from './login/login.component';
import { environment } from '../environments/environment';
import { TranslateService } from './service/translate.service';
import { RegisterComponent } from './register/register.component';

const routerSettings: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "user",
    component: UserComponent
  },
  {
    path: "user/:id",
    component: UserDetailComponent
  },
  {
    path: "issue",
    component: IssueComponent
  },
  {
    path: "issue/:id",
    component: IssueComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserDetailComponent,
    TableFilterPipe,
    MyIfDirective,
    SorterDirective,
    HomeComponent,
    UserComponent,
    CrudTableComponent,
    CrudSortPipe,
    IssueComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routerSettings),
    AngularFireModule.initializeApp(environment.firebaseSettings),
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [
    ConfigService,
    UserService,
    IssueService,
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
