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

        case UIActions.TOGGLE_OPEN_NAV_DROPDOWN: {
          // [ HACK ] replace with more effective tecnique
          const newState = JSON.parse(JSON.stringify(state));

          if (!action.payload.j) {
            // toggle parent
            newState.sidePanel.dropDownStates[action.payload.i].open = !newState.sidePanel.dropDownStates[action.payload.i].open;
            return newState;
          } else {
            // toggle child
            return newState;
          }
        }

        default: {
            return state;
        }
    }
}
