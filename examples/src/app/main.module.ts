import {NgModule}             from '@angular/core';
import {RouterModule}         from '@angular/router';
import {BrowserModule}        from '@angular/platform-browser';
import {FormsModule}          from '@angular/forms';
import {HttpClientPlusModule} from 'ng-http-client-plus';
import ValidatorsModule       from './_validators/validators.module';
import {MainComponent}        from './main/main.component';
import {LoginComponent}       from './login/login.component';
import {SetPasswordComponent} from './set-password/set-password.component';
import {SignUpComponent}      from './sign-up/sign-up.component';

const routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'set-password', component: SetPasswordComponent},
  {path: 'sign-up', component: SignUpComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ValidatorsModule,
    HttpClientPlusModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    MainComponent,
    LoginComponent,
    SignUpComponent,
    SetPasswordComponent
  ],
  bootstrap: [
    MainComponent
  ]
})
export class MainModule {}
