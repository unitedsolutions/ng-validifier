import {Component, ViewChild} from '@angular/core';

@Component({
  template: 
    `<form #f = "ngForm" novalidate>
      <div class = "element-container">
        <input type = "email" name = "email" ngModel dAsyncEmail = "500" />
      </div>
    </form>`
})
export default class { 
  @ViewChild('f') form;
}
