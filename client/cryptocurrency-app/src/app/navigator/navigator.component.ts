import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  @Input() userInfo:any;

  constructor() { }

  ngOnInit(): void {
  }
  destroyToken():void{
    window.localStorage.setItem('Token','');
  }
}
