import { MessageModalComponent } from './message-modal/message-modal.components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';


import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    MessageModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgxMaskModule,
  ],
  providers: [
  ],
  exports: [
    MessageModalComponent
  ]
})
export class SharedModule {
}
