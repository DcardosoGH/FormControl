import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import * as UiActions from '../../../state/UI/UI.actions';

import { State } from '../../../state/UI/UI.state';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.sass']
})
export class SidePanelComponent implements OnInit {

  UI$: Observable<State>;

  // [ HACK ] <any> should be <State>
  // Due to recent ngrx changes it
  constructor(private store: Store<any>) {
    this.UI$ = store.select('UIStore');
  }

  ngOnInit() {
  }

  toggleOpen() {
    this.store.dispatch(new UiActions.ToggleNavOpen());
  }

}
