import { Component, OnInit } from '@angular/core';

import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-login-poc',
  templateUrl: './login-poc.component.html',
  styleUrls: ['./login-poc.component.css']
})
export class LoginPocComponent {

  constructor(private oauthService: OAuthService) {
  }

  public login() {
      this.oauthService.initImplicitFlow();
  }

  public logoff() {
      this.oauthService.logOut();
  }

  public get name() {
      let claims = this.oauthService.getIdentityClaims();
      if (!claims) return null;
      return claims["preferred_username"];
  }

}
