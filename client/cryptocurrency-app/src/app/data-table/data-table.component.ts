import { Component, Input, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() dataInfo:any;
  sw:Boolean = false;
  allowedCryptos:any = []
  constructor(private service:AppserviceService) { }

  ngOnInit(): void {
  }

  displayModal(){
    this.service.getAllowedUserCryptos().subscribe((res:any)=>{
      console.log(res)
    })
    this.sw = true
  }

}
