import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Member } from '../interface/member';
import { MEMBERS } from '../interface/mock-members';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root' //rootの場合アプリケーション全体で使用できるサービス
})
export class MemberService {

  constructor(private messageService: MessageService) { }

  getMembers(): Observable<Member[]>{
    this.messageService.add('MemberService: 社員一覧データを取得しました');
    return of(MEMBERS);
  }

  getMember(id: number): Observable<Member> {
    this.messageService.add(`MemberService: 社員データ(id=${id})を取得しました`);
    return of(MEMBERS.find(member => member.id === id));
  }
}
