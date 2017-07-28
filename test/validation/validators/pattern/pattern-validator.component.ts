import {Component, ViewChild} from '@angular/core';

@Component({
  template: 
    `<form #f = "ngForm" novalidate>
      <div class = "element-container">
        <input type = "text" name = "name" ngModel dPattern = "[0-9]{10}" />
      </div>
    </form>`
})
export default class { 
  @ViewChild('f') form;
}
