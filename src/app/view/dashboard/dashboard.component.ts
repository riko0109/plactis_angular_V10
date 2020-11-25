import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/interface/member';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  members: Member[]=[];
  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => this.members=members.slice(2,6));
  }

}
