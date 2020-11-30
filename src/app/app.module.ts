import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './view/members/members.component';
import { MemberDetailComponent } from './view/member-detail/member-detail.component';
import { MessagesComponent } from './view/messages/messages.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { MemberSearchComponent } from './view/member-search/member-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberDetailComponent,
    MessagesComponent,
    DashboardComponent,
    MemberSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //HTTPクライアントを使う為のモジュール
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    FormsModule //ngModelプロパティの双方向バインディングを行う為にインポートする
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
