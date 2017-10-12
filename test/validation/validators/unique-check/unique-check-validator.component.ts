import {Component, ViewChild} from '@angular/core';
import {HttpClientPlus}       from 'ng-http-client-plus';

@Component({
  template: 
    `<form #f = "ngForm" novalidate>
      <div class = "element-container">
        <input type = "email" name = "email" ngModel dUniqueCheck = "/email" />
      </div>
    </form>`
})
export default class { 
  @ViewChild('f') form;
  
  constructor(http: HttpClientPlus) {
    http.init({
      baseUrl: 'http://localhost:12321',
      tokenName: 'auth-token'
    });
  }
}
