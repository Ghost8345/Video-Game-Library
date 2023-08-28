import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { PasswordvalidatorDirective } from './passwordvalidator.directive';


@NgModule({
  declarations: [
    LoginComponent,
    PasswordvalidatorDirective
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule

  ]
})
export class LoginModule { }
