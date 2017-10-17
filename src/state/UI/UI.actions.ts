import { Action } from '@ngrx/store';

export const TOGGLE_SIDE_PANEL     = '[UI] TOGGLE_SIDE_PANEL';
export const CLOSE_SIDE_PANEL     = '[UI] CLOSE_SIDE_PANEL';
export const TOGGLE_NAV_OPEN = '[UI] TOGGLE NAV_OPEN';


export class ToggleSidePanel implements Action {
  readonly type = TOGGLE_SIDE_PANEL;
  constructor() { }
}

export class ToggleNavOpen implements Action {
  readonly type = TOGGLE_NAV_OPEN;
}

export type All
  = ToggleSidePanel |
    ToggleNavOpen;
