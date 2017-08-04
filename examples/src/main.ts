import { enableProdMode }         from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MainModule } from './app/main.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

let start = () => platformBrowserDynamic().bootstrapModule(MainModule);

if(document.readyState == 'complete') {
  start();
} else {
  document.addEventListener('DOMContentLoaded', start);
}
