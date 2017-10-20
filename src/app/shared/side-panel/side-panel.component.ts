import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import * as UiActions from '../../../state/UI/UI.actions';

import { State } from '../../../state/UI/UI.state';
import * as UserState from '../../../state/user/user.state';
import * as UserActions from '../../../state/user/user.actions';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.sass']
})
export class SidePanelComponent implements OnInit {

  UI$: Observable<State>;
  User$: Observable<UserState.State>;

  // [ HACK ] <any> should be <State>
  // Due to recent ngrx changes it
  constructor(private store: Store<any>, private router: Router) {
    this.UI$ = store.select('UIStore');
    this.User$ = store.select('UserStore');
  }

  ngOnInit() {
  }

  toggleOpenDropDown(i, j) {
    this.store.dispatch(new UiActions.ToggleOpenDropDown({i, j}));
  }

  onLogout() {
    this.store.dispatch(new UserActions.UserLogout());
    this.router.navigate(['']);
  }

}
