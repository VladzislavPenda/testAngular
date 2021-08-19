import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-points-custom-input',
  templateUrl: './points-custom-input.component.html',
  styleUrls: ['./points-custom-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: PointsCustomInputComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: PointsCustomInputComponent
    }
  ]
})
export class PointsCustomInputComponent implements OnInit, ControlValueAccessor, Validators, OnDestroy {
  private _value: any;

  get value() {
  return this._value;
  }

  @Input() set value(val) {
  this._value = val;
  this.onChange(this._value);
  }

  onChange(_: any) {}
  onValidationChange: any = () => {};

  constructor() { }

  up() {
    this.value++;
  }

  down() {
    this.value-- ;
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched() {
  }

  // ValidationErrors | null не работает вместо any
  validate(control: AbstractControl): any {
    const counter = control.value;
      if (counter < 0 || counter > 20){
        control.setErrors({ outOfRange : true})
        return control
      }
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onValidationChange = fn;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    console.log("points validator destroyed")
  }
}
