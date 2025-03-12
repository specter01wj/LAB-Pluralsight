import { Directive, forwardRef, Provider } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

const DATE_VALUE_PROVIDER: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateValueAccessorDirective),
  multi: true,
}

@Directive({
  selector: 'input([type=date])[ngModel],input([type=date])[formControl],input([type=date])[formControlName]'
})
export class DateValueAccessorDirective {

  constructor() { }

}
