import {Component, ViewChild}   from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  template: 
    `<form [formGroup] = "form" novalidate>
      <div class = "element-container">
        <input type = "text" formControlName = "name" dRequired />
      </div>
    </form>`
})
export default class { 
  form = new FormGroup({
    name: new FormControl('')
  });
}
