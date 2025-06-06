import { Component, Provider, forwardRef } from '@angular/core';
import { profileIconNames } from './profile-icon-names';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const PROFILE_ICON_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ProfileIconSelectorComponent),
  multi: true,
}

@Component({
  selector: 'app-profile-icon-selector',
  standalone: false,
  templateUrl: './profile-icon-selector.component.html',
  styleUrl: './profile-icon-selector.component.scss',
  providers: [PROFILE_ICON_VALUE_ACCESSOR]
})
export class ProfileIconSelectorComponent implements ControlValueAccessor {
  profileIcons = profileIconNames;
  showAllIcons: boolean = true;
  selectedIcon!: string | null;

  private onChange!: Function;
  private onTouched!: Function;

  writeValue(icon: string | null) {
    this.selectedIcon = icon;
    if (icon && icon !== '')
      this.showAllIcons = false;
    else
      this.showAllIcons = true;
  }

  registerOnChange(fn: Function) {
    this.onChange = (icon: string) => { fn(icon); };
  }

  registerOnTouched(fn: Function) {
    this.onTouched = fn;
  }

  iconSelected(icon: string) {
    this.showAllIcons = false;
    this.selectedIcon = icon;
    this.onChange(icon);
  }

}
