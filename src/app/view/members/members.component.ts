import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/service/message.service';
import { Member } from '../../interface/member'
import { MemberService } from '../../service/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[];

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers() // Observableが返却される
      .subscribe(members => this.members = members);
  }

}
