import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppserviceService {
  url: String = 'http://localhost:3001';
  constructor(private http: HttpClient) {}

  login(object:Object): any {
    return this.http.post<any>(`${this.url}/api/v1/login`, object);
  }

  getUserInfo(username: any): any {
    let headers = {
      username,
      authorization: JSON.stringify(window.localStorage.getItem('Token'))
    }
    return this.http.get<any>(`${this.url}/api/v1/userInfo`,{headers});
  }

  getCountryByCodInfo() {}

  getCountriesInfo() {}

  getAllowedCryptos() {}

  getAllowedUserCryptos():any {
    let headers = {
      pais_id:'1',
      username:'luquef'
    }
    return this.http.get<any>(`${this.url}/api/v1/allowedUserCryptos`,{headers});

  }

  addCrypto(){
    this.http.post(`${this.url}/api/v1/addCrypto`,{username:''})
  }
}
