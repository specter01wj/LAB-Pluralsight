import { AbstractControl } from '@angular/forms';

export class CustomerValidators {

	static emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
	  const emailControl = c.get('email');
	  const confirmControl = c.get('confirmEmail');

	  if (emailControl.pristine || confirmControl.pristine) {
	    return null;
	  }

	  if (emailControl.value === confirmControl.value) {
	    return null;
	  }
	  return { match: true };
	}

	static ratingRange(min: number, max: number): ValidatorFn {
	  return (c: AbstractControl): { [key: string]: boolean } | null => {
	    if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
	      return { range: true };
	    }
	    return null;
	  };
	}

}
