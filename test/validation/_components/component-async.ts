import {Component, ViewChild} from '@angular/core';

@Component({
  template: 
    `<form #f = "ngForm" novalidate>
      <div class = "element-container">
        <input type = "text" name = "email" ngModel dRequired dAsyncEmail = "1000" />
      </div>
    </form>`
})
export default class { 
  @ViewChild('f') form;
}
