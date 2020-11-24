import { Component, OnInit } from '@angular/core';
import { Member } from './member'
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  member = {name:'田中太郎',id:'1'};

  constructor() { }

  ngOnInit(): void {
  }

}
