import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

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
  updateMember(member: Member): Observable<any> {
    return this.http.put(this.membersURL,member,this.httpOptions)
      .pipe(
        tap(_ => this.log(`社員データ(id=${member.id})を変更しました`)),
        catchError(this.handleError<any>('updateMember'))
      );
  }

  addMember(member: Member): Observable<Member> {
    return this.http.post<Member>(this.membersURL,member,this.httpOptions)
      .pipe(
        tap((newMember: Member) => this.log(`社員データ(id=${newMember.id}を追加しました)`)),
        catchError(this.handleError<Member>('addMember')) 
      );
  }

  deleteMember(member: Member | number): Observable<Member> {
    const id = typeof member === 'number' ? member : member.id;
    const URL = `${this.membersURL}/${id}`;
    return this.http.delete<Member>(URL,this.httpOptions)
      .pipe(
        tap((_ => this.log(`社員データ(id=${id})を削除しました`))),
        catchError(this.handleError<Member>('deleteMember'))
      );
  }

  searchMembers(term: string): Observable<Member[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Member[]>(`${this.membersURL}/?name=${term}`)
    .pipe(
      tap(_ => this.log(`${term}にマッチする社員データが見つかりました`)),
      catchError(this.handleError<Member[]>('searchMember',[]))
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
