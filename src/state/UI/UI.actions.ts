import { Action } from '@ngrx/store';

export const TOGGLE_SIDE_PANEL     = '[UI] TOGGLE_SIDE_PANEL';
export const TOGGLE_OPEN_NAV_DROPDOWN     = '[UI] TOGGLE_OPEN_NAV_DROPDOWN';

export const TOGGLE_NAV_OPEN_PARENT = '[UI] TOGGLE_NAV_OPEN_PARENT';
export const TOGGLE_NAV_OPEN_CHILD_1 = '[UI] TOGGLE_NAV_OPEN_CHILD_1';


export class ToggleSidePanel implements Action {
  readonly type = TOGGLE_SIDE_PANEL;
  constructor() { }
}

export class ToggleOpenDropDown implements Action {
  readonly type = TOGGLE_OPEN_NAV_DROPDOWN;
  constructor(public payload: {i: number, j?: number}) { }
}


export type All
  = ToggleSidePanel |
  ToggleOpenDropDown;
