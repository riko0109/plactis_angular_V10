import { Injectable } from '@angular/core';
import { Member } from './members/member';
import { MEMBERS } from './members/mock-members';

@Injectable({
  providedIn: 'root' //rootの場合アプリケーション全体で使用できるサービス
})
export class MemberService {

  constructor() { }

  getMembers(): Member[]{
    return MEMBERS;
  }
}
