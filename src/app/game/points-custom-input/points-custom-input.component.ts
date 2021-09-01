import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validators } from '@angular/forms';

const MAX_DART_POINT_VALUE = 20;

@Component({
  selector: 'app-points-custom-input',
  templateUrl: './points-custom-input.component.html',
  styleUrls: ['./points-custom-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
export class PointsCustomInputComponent implements ControlValueAccessor, Validators {
  private _value?: number;
  public control?: AbstractControl;

  get value() {
    if (this._value == 0)
      return undefined
    return this._value;
  }

  @Input() set value(val) {
  this._value = val;
  this.onChange(this._value);
  }

  private onChange(_: any) {}
  onValidationChange: any = () => {};

  public writeValue(value: any) {
    this.value = value;
  }

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched() {
  }

  // ValidationErrors | null не работает вместо any
  private validate(control: AbstractControl): any {
    const counter = control.value;
      if (counter < 0 || counter > MAX_DART_POINT_VALUE){
        control.setErrors({ outOfRange : true})
        this.control = control;
        return control
      }
  }

  private registerOnValidatorChange?(fn: () => void): void {
    this.onValidationChange = fn;
  }
}
