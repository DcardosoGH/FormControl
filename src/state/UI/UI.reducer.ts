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
          if (newState.sidePanel.sidePanelNav.ParentNav.isCollapsed) {
            newState.sidePanel.sidePanelNav.ParentNav.openClass = '';
            newState.sidePanel.sidePanelNav.ParentNav.openClass = 'open';
            newState.sidePanel.sidePanelNav.ParentNav.isCollapsed = !newState.sidePanel.sidePanelNav.ParentNav.isCollapsed;
            newState.sidePanel.sidePanelNav.ParentNav.ariaExpanded = ! newState.sidePanel.sidePanelNav.ParentNav.ariaExpanded;
          } else {
            newState.sidePanel.sidePanelNav.ParentNav.openClass = '';
            newState.sidePanel.sidePanelNav.ParentNav.openClass = 'collapse';
            newState.sidePanel.sidePanelNav.ParentNav.isCollapsed = !newState.sidePanel.sidePanelNav.ParentNav.isCollapsed;
            newState.sidePanel.sidePanelNav.ParentNav.ariaExpanded = ! newState.sidePanel.sidePanelNav.ParentNav.ariaExpanded;
          }
            return newState;
        }

        case UIActions.TOGGLE_NAV_OPEN_CHILD_1: {
          const newState = Object.assign({}, state);
          if (newState.sidePanel.sidePanelNav.Child1Nav.isCollapsed) {
            newState.sidePanel.sidePanelNav.Child1Nav.openClass = '';
            newState.sidePanel.sidePanelNav.Child1Nav.openClass = 'open';
            newState.sidePanel.sidePanelNav.Child1Nav.isCollapsed = !newState.sidePanel.sidePanelNav.Child1Nav.isCollapsed;
            newState.sidePanel.sidePanelNav.Child1Nav.ariaExpanded = ! newState.sidePanel.sidePanelNav.Child1Nav.ariaExpanded;
          } else {
            newState.sidePanel.sidePanelNav.Child1Nav.openClass = '';
            newState.sidePanel.sidePanelNav.Child1Nav.openClass = 'collapse';
            newState.sidePanel.sidePanelNav.Child1Nav.isCollapsed = !newState.sidePanel.sidePanelNav.Child1Nav.isCollapsed;
            newState.sidePanel.sidePanelNav.Child1Nav.ariaExpanded = ! newState.sidePanel.sidePanelNav.Child1Nav.ariaExpanded;
          }
            return newState;
        }

        default: {
            return state;
        }
    }
}
