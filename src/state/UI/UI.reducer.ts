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

        case UIActions.TOGGLE_NAV_OPEN_PARENT: {
          const newState = Object.assign({}, state);
          if (newState.sidePanelNav.ParentNav.isCollapsed) {
            newState.sidePanelNav.ParentNav.openClass = '';
            newState.sidePanelNav.ParentNav.openClass = 'open';
            newState.sidePanelNav.ParentNav.isCollapsed = !newState.sidePanelNav.ParentNav.isCollapsed;
            newState.sidePanelNav.ParentNav.ariaExpanded = ! newState.sidePanelNav.ParentNav.ariaExpanded;
          } else {
            newState.sidePanelNav.ParentNav.openClass = '';
            newState.sidePanelNav.ParentNav.openClass = 'collapse';
            newState.sidePanelNav.ParentNav.isCollapsed = !newState.sidePanelNav.ParentNav.isCollapsed;
            newState.sidePanelNav.ParentNav.ariaExpanded = ! newState.sidePanelNav.ParentNav.ariaExpanded;
          }
            return newState;
        }

        case UIActions.TOGGLE_NAV_OPEN_CHILD_1: {
          const newState = Object.assign({}, state);
          if (newState.sidePanelNav.Child1Nav.isCollapsed) {
            newState.sidePanelNav.Child1Nav.openClass = '';
            newState.sidePanelNav.Child1Nav.openClass = 'open';
            newState.sidePanelNav.Child1Nav.isCollapsed = !newState.sidePanelNav.Child1Nav.isCollapsed;
            newState.sidePanelNav.Child1Nav.ariaExpanded = ! newState.sidePanelNav.Child1Nav.ariaExpanded;
          } else {
            newState.sidePanelNav.Child1Nav.openClass = '';
            newState.sidePanelNav.Child1Nav.openClass = 'collapse';
            newState.sidePanelNav.Child1Nav.isCollapsed = !newState.sidePanelNav.Child1Nav.isCollapsed;
            newState.sidePanelNav.Child1Nav.ariaExpanded = ! newState.sidePanelNav.Child1Nav.ariaExpanded;
          }
            return newState;
        }

        default: {
            return state;
        }
    }
}
