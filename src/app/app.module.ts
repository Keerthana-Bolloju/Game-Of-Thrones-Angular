import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule,Routes} from '@angular/router'
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { GotHttpService } from './got-http.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'info',component:InfoComponent},
      {path:'books',component:HomeComponent},
      {path:'characters',component:HomeComponent},
      {path:'houses',component:HomeComponent},
      {path:'books/:bookId',component:InfoComponent},
      {path:'characters/:characterId',component:InfoComponent},
      {path:'houses/:houseId',component:InfoComponent},
      {path:'**',redirectTo:'home'}
    ])

  ],
  providers: [GotHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
