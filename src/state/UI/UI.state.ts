export interface State {
  sidePanel: {
    isOpen: Boolean,
  };
  sidePanelNav: {
    ParentNav: {
      isCollapsed: Boolean,
      openClass: string
    }
    Child1Nav: {
      isCollapsed: Boolean,
      openClass: string
    }
 };
}

export const intitialState: State = {
  sidePanel: {
    isOpen: true,
  },
  sidePanelNav: {
    ParentNav: {
      openClass: 'collapse',
      isCollapsed: true
    },
    Child1Nav: {
      openClass: 'collapse',
      isCollapsed: true
    }
  }
};
