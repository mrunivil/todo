import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDoListViewModel } from './todo.list.view.model';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo.list.component.html',
    styleUrls: ['./todo.list.component.scss']
})
export class TodoListComponent {
    @Input() viewModel: ToDoListViewModel;
    @Output() loadListChange = new EventEmitter<string>();

    loadList() {
        this.loadListChange.emit('Hello World');
    }
}
