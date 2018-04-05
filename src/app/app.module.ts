import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserService } from './service/user.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { TableFilterPipe } from './table-filter.pipe';
import { MyIfDirective } from './my-if.directive';
import { SorterDirective } from './sorter.directive';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

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
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routerSettings)
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
