import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../Model/jwt-dto';
import { NewUser } from '../Model/new-user';
import { UserLogin } from '../Model/user-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'https://backportfolioblanco.herokuapp.com/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(newUser: NewUser): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', newUser);
  }

  public login(userLogin: UserLogin): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL+ 'login', userLogin);
  }
}
