import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './view/members/members.component';
import { MemberDetailComponent } from './view/member-detail/member-detail.component';
import { MessagesComponent } from './view/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //ngModelプロパティの双方向バインディングを行う為にインポートする
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
