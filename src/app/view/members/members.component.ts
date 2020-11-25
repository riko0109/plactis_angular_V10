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
  selectedMember: Member;

  constructor(
    private memberService: MemberService,
    private messageService: MessageService
    ) { }

  ngOnInit(): void {
    this.getMembers();
  }

  onSelect(member: Member) :void{
    this.selectedMember =  member;
    this.messageService.add(`MembersComponent: 社員データ(id=${member.id})が選択されました`);
  }

  getMembers(): void {
    this.memberService.getMembers() // Observableが返却される
      .subscribe(members => this.members = members);
  }

}
