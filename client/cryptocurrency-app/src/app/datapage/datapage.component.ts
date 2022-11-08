import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';
@Component({
  selector: 'app-datapage',
  templateUrl: './datapage.component.html',
  styleUrls: ['./datapage.component.scss']
})
export class DatapageComponent implements OnInit {
   dataInfo:Array<any> = [];
   objectInfo:any = {username:'',apellido:'',paissname:''}
  constructor(private service:AppserviceService) { }

  ngOnInit(): void {
    this.service.getUserInfo("luquef").subscribe((res:any)=>{
      this.dataInfo = res;
      this.objectInfo.username = res[0].username;
      this.objectInfo.apellido = res[0].apellido;
      this.objectInfo.paisname = res[0].paisname.substring(0,2).toUpperCase();
    })
  }

}
