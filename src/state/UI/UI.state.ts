export interface State {
  sidePanel: {
    isOpen: Boolean,
  };
  sidePanelNav: {
    isCollapsed: Boolean,
    openClass: string
  };
}

export const intitialState: State = {
  sidePanel: {
    isOpen: true,
  },
  sidePanelNav: {
    openClass: 'collapse',
    isCollapsed: true
  }
};
