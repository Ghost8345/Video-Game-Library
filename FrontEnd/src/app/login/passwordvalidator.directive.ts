import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordvalidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordvalidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordvalidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.value as string;
    if (password && password.length >= 8 && password.length <= 32){
      let count = 0;
      if (password.match(/[0-9]/)){
        console.log("There is a number")
        count++;
      }
        
      if (password.match(/[a-z]/)){
        console.log("There is a small letter")
        count++;
      }
        
      if (password.match(/[A-Z]/)){
        console.log("There is a capital letter")
        count++;
      }
        
      if (password.match(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/)){
        console.log("There is a special character")
        count++;
      }

      console.log(count)

      if (count == 4) {
        return null; 
      }
    }

    return {
      invalidPassword: true
    };

  }

}
