import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { InputComponent } from './ui-components/input/input.component';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './ui-components/checkbox/checkbox.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonComponent } from './ui-components/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { TableModule } from 'primeng/table';

const components = [
  FormComponent,
  InputComponent,
  CheckboxComponent,
  ButtonComponent,
  ListComponent
];
@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    ReactiveFormsModule,
    TableModule

  ],
  exports: [components, FlexLayoutModule],
})
export class SharedModule {}
