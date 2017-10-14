import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoItemComponent } from './todo-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TodoItemComponent],
  exports: [TodoItemComponent]
})
export class TodoItemModule { }
