import { Directive, ElementRef, forwardRef, HostListener, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const DATE_VALUE_PROVIDER: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateValueAccessorDirective),
  multi: true,
};

@Directive({
  selector: 'input([type=date])[formControlName],input([type=date])[formControl],input([type=date])[ngModel]',
  providers: [DATE_VALUE_PROVIDER],
  standalone: false
})
export class DateValueAccessorDirective implements ControlValueAccessor {

  constructor(private element: ElementRef) { }

  @HostListener('input', ['$event.target.valueAsDate'])
  private onChange!: Function;

  @HostListener('blur')
  private onTouched!: Function;

  registerOnChange(fn: Function) {
    this.onChange = (valueAsDate: Date) => { fn(valueAsDate); };
  }

  registerOnTouched(fn: Function) {
    this.onTouched = fn;
  }

  writeValue(newValue: any) {
    if (newValue instanceof Date) {
      this.element.nativeElement.value = newValue.toISOString().split('T')[0];
    }
  }

}
