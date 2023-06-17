import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { InputComponent } from './ui-components/input/input.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
const components = [FormComponent, InputComponent];
@NgModule({
  declarations: [components],
  imports: [CommonModule, MatInputModule, MatCheckboxModule, MatIconModule, FormsModule],
  exports: [components,InputComponent],
})
export class SharedModule {}
