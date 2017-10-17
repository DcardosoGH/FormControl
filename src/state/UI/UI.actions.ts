import { Action } from '@ngrx/store';

export const TOGGLE_SIDE_PANEL     = '[UI] TOGGLE_SIDE_PANEL';
export const CLOSE_SIDE_PANEL     = '[UI] CLOSE_SIDE_PANEL';
export const TOGGLE_NAV_OPEN_PARENT = '[UI] TOGGLE_NAV_OPEN_PARENT';
export const TOGGLE_NAV_OPEN_CHILD_1 = '[UI] TOGGLE_NAV_OPEN_CHILD_1';


export class ToggleSidePanel implements Action {
  readonly type = TOGGLE_SIDE_PANEL;
  constructor() { }
}

export class ToggleNavOpenParent implements Action {
  readonly type = TOGGLE_NAV_OPEN_PARENT;
}

export class ToggleNavOpenChild1 implements Action {
  readonly type = TOGGLE_NAV_OPEN_CHILD_1;
}




export type All
  = ToggleSidePanel |
  ToggleNavOpenParent |
  ToggleNavOpenChild1;
