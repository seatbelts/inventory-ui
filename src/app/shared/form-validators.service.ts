import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable()
export class FormValidatorsService {

  constructor() { }

  discountValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const input = control.value;
      const isValid = input > 100;
      if (isValid) {
        return { maxValue: 100 };
      } else {
        return null;
      }
    };
  }
}
