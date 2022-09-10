import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/Model/user-login';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  userLogin!: UserLogin;
  userName!: string; 
  password!: string;
  roles: string[] = [];
  errMsg!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;  
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    console.log("onLoginprueba");
    this.userLogin = new UserLogin(this.userName, this.password); 
    this.authService
      .login(this.userLogin).subscribe(data => {
        console.log(data);
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.userName);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['']);

    }, err => {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errMsg = err.error.message;
      console.log(this.errMsg);
    })
  }

}
