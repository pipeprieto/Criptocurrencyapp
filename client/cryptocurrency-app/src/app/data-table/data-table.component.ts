import { Component, Input, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  @Input() dataInfo:any;
  
  constructor(private service:AppserviceService) { }

  ngOnInit(): void {
  }

 

}
