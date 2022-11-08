import { Component, OnInit,Injector } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import{AppserviceService}from '../appservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  userData: Array<any> = [];
  constructor(
    public router: Router,
    private readonly fg: FormBuilder,
    private service: AppserviceService
  ) {}

  ngOnInit(): void {
    this.login = this.initForm();
  }

  navigateTo(datos: any) {

    const resp = this.service.login(datos).subscribe((res:any)=>{
      this.userData.push(res.data);
      window.localStorage.setItem('Token', res.tokenSession);
    });
      this.router.navigate(['/dashboard']);
  }
  initForm(): FormGroup {
    return this.fg.group({
      username: ['', [Validators.required]],
      pass: ['', [Validators.required]],
    });
  }
}
