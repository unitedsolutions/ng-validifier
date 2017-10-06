import {Component, ViewChild} from '@angular/core';

@Component({
  template: 
    `<form #f = "ngForm" novalidate>
      <div class = "element-container">
        <input type = "text" name = "name" ngModel dMinLength = "5" />
      </div>
    </form>`
})
export default class { 
  @ViewChild('f') form;
}
