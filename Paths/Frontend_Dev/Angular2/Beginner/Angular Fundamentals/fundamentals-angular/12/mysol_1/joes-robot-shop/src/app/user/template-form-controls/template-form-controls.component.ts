import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form-controls',
  templateUrl: './template-form-controls.component.html',
  styleUrl: './template-form-controls.component.scss'
})
export class TemplateFormControlsComponent implements OnInit {
  textInput: string = '';
  numericInput: number = 0;
  stringInput: string = '';
  numericSelect: number = 0;
  checkboxInput: boolean = false;
  radioInput: number | null = null;

  selectOptions: any[] = [
    { text: 'Option One', value: 1 },
    { text: 'Option Two', value: 2 },
  ];
  constructor() { }

  ngOnInit(): void { }

  getType(value: any) {
    if (value === null || value === undefined) return '';

    console.log('ns', this.numericSelect);
    return typeof value;
  }
}
