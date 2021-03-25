import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { EditTodoComponent } from './edit.todo.component';
import { TodoListComponentModule } from '../../components/todo.list.component.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, IonicModule, TodoListComponentModule, FormsModule],
  declarations: [EditTodoComponent],
  exports: [EditTodoComponent],
})
export class EditTodoComponentModule {}
