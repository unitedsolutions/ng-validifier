import {Component}      from '@angular/core';
import {HttpClientPlus} from 'ng-http-client-plus';

@Component({
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent {
  constructor(http: HttpClientPlus) {
    http.init({
      baseUrl: 'http://127.0.0.1:12321',
      tokenName: 'auth-token'
    });
  }
}
