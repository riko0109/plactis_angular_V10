import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Member } from '../interface/member';
import { MEMBERS } from '../interface/mock-members';
import { MessageService } from './message.service';
import { catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root' //rootの場合アプリケーション全体で使用できるサービス
})
export class MemberService {

  private membersURL = 'api/members';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
    ) { }

  getMembers(): Observable<Member[]>{
    return this.http.get<Member[]>(this.membersURL)
      .pipe(
        tap(members => this.log('社員データを取得しました')), //中間処理で実行するメソッド
        catchError(this.handleError<Member[]>('getMembers',[]))
      );
    }

  getMember(id: number): Observable<Member> {
    const URL = `${this.membersURL}/${id}`;
    return this.http.get<Member>(URL)
      .pipe(
        tap( _ => this.log(`社員データ(id=${id})を取得しました`)),
        catchError(this.handleError<Member>(`getMember id = ${id}`))
      );
  }

  private log(message: string) {
    this.messageService.add(`MemberService: ${message}`);
  }

  private handleError<T>(operation = 'operation',result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} 失敗:${error.message}`);

      return of(result as T);
    }
  }
}
