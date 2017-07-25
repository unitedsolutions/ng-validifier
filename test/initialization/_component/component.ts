import {Component, ViewChild} from '@angular/core';

@Component({
  template: 
    `<form #f = "ngForm" novalidate>
      <div class = "element-container">
        <input type = "text" name = "name" ngModel dRequired dMinLength = "5" />
      </div>
      <div class = "element-container">
        <input type = "email" name = "email" ngModel dRequired dAsyncEmail = "0" />
      </div>
    </form>`
})
export default class { 
  @ViewChild('f') form;
}
