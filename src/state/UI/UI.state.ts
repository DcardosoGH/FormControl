export interface State {
  sidePanel: {
    isOpen: Boolean,
    sidePanelNav: {
      ParentNav: {
        isCollapsed: Boolean,
        openClass: string,
        ariaExpanded: Boolean
      }
    Child1Nav: {
      isCollapsed: Boolean,
      openClass: string
      ariaExpanded: Boolean
      }
  };
 };
}

export const intitialState: State = {
  sidePanel: {
    isOpen: true,
    sidePanelNav: {
      ParentNav: {
        openClass: 'collapse',
        isCollapsed: true,
        ariaExpanded: false
      },
      Child1Nav: {
        openClass: 'collapse',
        isCollapsed: true,
        ariaExpanded: false
      }
  }
  }
};
