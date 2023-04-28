import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/register/auth.service";
import {TokenStorageService} from "../../../services/login/token-storage.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router: Router) { }

  ngOnInit(): void {
    // this.tokenStorage.signOut();
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = ` ${this.tokenStorage.getUser().firstName} ${this.tokenStorage.getUser().lastName} with role= ${this.tokenStorage.getUser().roles[0].name}` ;
    }
  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        //console.log('login data:'+JSON.stringify(data))
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data.user);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/dashboard']);

        //console.log('user:'+JSON.stringify(this.tokenStorage.getUser()))

        //this.roles = ` ${this.tokenStorage.getUser().firstName} ${this.tokenStorage.getUser().lastName} with role= ${this.tokenStorage.getUser().roles[0].name}` ;
        // this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }


  reloadPage(): void {
    window.location.reload();
  }

}
