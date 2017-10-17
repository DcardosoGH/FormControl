import { of } from 'rxjs/observable/of';
import { State, intitialState } from './UI.state';
import * as UIActions from './UI.actions';

export type Action = UIActions.All;

export default function todoListReducer(state = intitialState, action: Action): State {
    switch (action.type) {
        case UIActions.TOGGLE_SIDE_PANEL: {
            const newstate = Object.assign({}, state);
            newstate.sidePanel.isOpen = !newstate.sidePanel.isOpen;
            return newstate;
        }

        case UIActions.TOGGLE_NAV_OPEN: {
          const newState = Object.assign({}, state);
          if (newState.sidePanelNav.isCollapsed) {
            newState.sidePanelNav.openClass = '';
            newState.sidePanelNav.openClass = 'open';
            newState.sidePanelNav.isCollapsed = !newState.sidePanelNav.isCollapsed;
          } else {
            newState.sidePanelNav.openClass = '';
            newState.sidePanelNav.openClass = 'collapse';
            newState.sidePanelNav.isCollapsed = !newState.sidePanelNav.isCollapsed;
          }
            return newState;
        }

        default: {
            return state;
        }
    }
}
