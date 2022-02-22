import { UserFormModule } from './../../../shared/components/user-form/user-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    EditRoutingModule,
    ReactiveFormsModule,
    UserFormModule
  ]
})
export class EditModule { }
