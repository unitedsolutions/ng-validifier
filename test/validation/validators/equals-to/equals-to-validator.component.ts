import {Component, ViewChild} from '@angular/core';

@Component({
  template: 
    `<form #f = "ngForm" novalidate>
      <div class = "element-container">
        <input type = "password" name = "password" ngModel dRequired />
      </div>
      <div class = "element-container">
        <input type = "password" name = "confirmationPassword" ngModel 
         dDeps = "password" dEqualsTo = "password" />
      </div>
    </form>`
})
export default class { 
  @ViewChild('f') form;
}
