import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Member } from 'src/app/interface/member';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.css']
})
export class MemberSearchComponent implements OnInit {

  members$: Observable<Member[]>;
  private searchTerms = new Subject<string>();//Subject=Observableを継承したクラス

  constructor(private memberService: MemberService) { }

  search(term: string): void {
    this.searchTerms.next(term);//SubjectではNextが使え、引数をpipeを使って中間処理しSubscribeしている部分にデータを送信できる
  }

  ngOnInit(): void {
    this.members$ = this.searchTerms.pipe(
      //最後のイベントの後300ms待って次の実行に移る
      debounceTime(300),

      //直前のデータと同じデータの場合は処理をスキップし、終了する
      distinctUntilChanged(),

      //検索文字列を受け取るたびにsearchMembersメソッドを使って新しいObservableを返却する
      switchMap((term: string) => this.memberService.searchMembers(term))  
    );
  }

}
