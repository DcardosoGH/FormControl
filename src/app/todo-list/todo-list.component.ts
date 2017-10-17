import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { State } from '../../state/todo-list/todo-list.state';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {

  list$: Observable<State>;

  // [ HACK ] <any> should be <State>
  // Due to recent ngrx changes it
  constructor(private store: Store<any>) {
    this.list$ = store.select('todoListStore');
  }

  ngOnInit() {
  }
}
