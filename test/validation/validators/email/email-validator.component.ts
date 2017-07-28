import {Component, ViewChild} from '@angular/core';

@Component({
  template: 
    `<form #f = "ngForm" novalidate>
      <div class = "element-container">
        <input type = "email" name = "email" ngModel dEmail />
      </div>
    </form>`
})
export default class { 
  @ViewChild('f') form;
}
