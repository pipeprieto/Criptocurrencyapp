import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() dataInfo:any;
  sw: Boolean = false;
  allowedCryptos: any = [];
  constructor(public modal: NgbModal, private service: AppserviceService) {}

  ngOnInit(): void {
    this.displayDataModal();
  }

  displayDataModal() {
    this.service.getAllowedUserCryptos('2','jhadechine').subscribe((res: any) => {
      this.dataInfo = res;
    });
  }
  hideModal(){};
}
