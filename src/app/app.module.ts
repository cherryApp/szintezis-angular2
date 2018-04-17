import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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
    IssueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routerSettings)
  ],
  providers: [
    ConfigService,
    UserService,
    IssueService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
