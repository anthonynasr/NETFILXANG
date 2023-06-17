import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormField } from '../../models/modelParams.model';

@Component({
  selector: 'nf-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Output() submitEvent: EventEmitter<any> = new EventEmitter();

  @Input() fields;
  @Input() params;
  @Input() disableForm?: boolean;
  createdFormGroup: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.createdFormGroup = this.createReactiveForm(this.fields);
    if(this.params && this.createdFormGroup){
        this.updateReactiveForm(this.params);
    }
  }

  createReactiveForm(fields: FormField[]): FormGroup {
    const formBuilder = new FormBuilder();
    const formControlsConfig = {};

    fields.forEach((field) => {
      const validators = field.required ? [Validators.required] : [];
      formControlsConfig[field.name] = [
        field?.defaultValue ? field?.defaultValue : '',
        validators,
      ];
    });

    const formGroup = formBuilder.group(formControlsConfig);

    return formGroup;
  }

  updateReactiveForm(params) {
    this.createdFormGroup.patchValue(params);
  }

  submitValues(){
    if(this.createdFormGroup.valid){
        this.submitEvent.emit(this.createdFormGroup.value);
    }
  }
}
