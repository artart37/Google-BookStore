import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

export function emptyValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const regexNotEmpty: RegExp = /^(?!\s*$).+/;
  if (control.value && regexNotEmpty.test(control.value)) {
    return null;
  } else {
    return { emptyControlError: true };
  }
}

@Directive({
  selector: '[emptyValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmptyValidationDirective,
      multi: true,
    },
  ],
})
export class EmptyValidationDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return emptyValidator(control);
  }
}
