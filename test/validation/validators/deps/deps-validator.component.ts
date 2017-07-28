import {Component, ViewChild} from '@angular/core';

@Component({
  template: 
    `<form #f = "ngForm" novalidate>
      <div class = "element-container">
        <input type = "text" name = "firstName" ngModel dRequired />
      </div>
      <div class = "element-container">
        <input type = "text" name = "lastName" ngModel dDeps = "firstName" />
      </div>
    </form>`
})
export default class { 
  @ViewChild('f') form;
}
