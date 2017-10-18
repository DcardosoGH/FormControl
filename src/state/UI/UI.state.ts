export interface State {
  sidePanel: {
    isOpen: Boolean;
    dropDownStates: Array<any>; // [ HACK ] don't use `any`
    sidePanelNav: {
      ParentNav: {
        isCollapsed: Boolean;
        openClass: string;
        ariaExpanded: Boolean;
      };
      Child1Nav: {
        isCollapsed: Boolean;
        openClass: string;
        ariaExpanded: Boolean;
      };
    };
  };
}

export const intitialState: State = {
  sidePanel: {
    isOpen: true,
    dropDownStates: [
      {
        open: true,
        children: []
      },
    ],
    sidePanelNav: {
      ParentNav: {
        openClass: "collapse",
        isCollapsed: true,
        ariaExpanded: false
      },
      Child1Nav: {
        openClass: "collapse",
        isCollapsed: true,
        ariaExpanded: false
      }
    }
  }
};
