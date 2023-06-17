import {
  Component,
  OnInit,
  Input,
  Output,
  forwardRef,
  EventEmitter,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'nf-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() label: string = 'Default label';
  @Input() placeholder?: string;
  @Input() description?: string;
  @Input() type: string = 'text';
  @Input() min?: number;
  @Input() max?: number;
  @Input() disabled: boolean = false;
  @Input() step?: number;

  @Output() change: EventEmitter<any> = new EventEmitter();
  _value: any;
  constructor() {}

  ngOnInit(): void {}

  set value(value) {
    this._value = value;
    this.onChange(this._value);
  }

  get value() {
    return this._value;
  }

  // Function to call when the rating changes.
  onChange = (value) => {};

  // Function to call when the input is touched (when a star is clicked).
  onTouched = (value) => {};

  writeValue(value): void {
    this.value = value;
  }
  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  changeVal(value) {
    this.change.emit(value);
  }
}
