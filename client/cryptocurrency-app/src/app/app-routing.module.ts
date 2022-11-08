import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {DatapageComponent} from './datapage/datapage.component';
import { ProfileComponent } from './profile/profile.component'; 
const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'dashboard',component:DatapageComponent},
  //{path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
