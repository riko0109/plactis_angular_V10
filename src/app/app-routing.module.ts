import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { MemberDetailComponent } from './view/member-detail/member-detail.component';
import { MembersComponent } from './view/members/members.component';

const routes: Routes = [
  { path: '',redirectTo: '/dashboard',pathMatch: 'full' },//トップページにアクセスしたときにdashboardcomponentに飛ばす
  { path: 'members', component: MembersComponent },//pathにアクセスしたらcomponentを表示する
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: MemberDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
