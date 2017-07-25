import {Component, ViewChild} from '@angular/core';

@Component({
  template: 
    `<form #f = "ngForm" novalidate>
      <div class = "element-container">
        <input ngModel type = "password" name = "password" dRequired 
         dMinLength = "5" />
      </div>
      <div class = "element-container">
        <input ngModel type = "password" name = "confirmationPassword" 
         dDeps = "password" dEqualsTo = "password" />
      </div>  
    </form>`
})
export default class { 
  @ViewChild('f') form;
}
