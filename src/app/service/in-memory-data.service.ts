import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Member } from '../interface/member';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  
  createDb() {
    const members = [
      {id:1, name: '高橋 和彦'},
      {id:2, name: '白取 直弘'},
      {id:3, name: '畠山 光'　},
      {id:4, name: '伊藤 百美'},
      {id:5, name: '岩崎 利己'},
      {id:6, name: '白鳥 昂太'}
    ];

    return { members };
  }

  genId(members: Member[]): number {
    return members.length > 0 ? Math.max(...members.map(member => member.id)) + 1 : 5;
  } 
}
