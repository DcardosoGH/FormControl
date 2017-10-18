export interface State {
  sidePanel: {
    isOpen: Boolean;
    dropDownStates: Array<DropDown>;
  };
}

export interface DropDown {
  open: Boolean;
  children?: Array<any>;
}

export const intitialState: State = {
  sidePanel: {
    isOpen: true,
    dropDownStates: [
      {
        open: false,
        children: []
      },
      {
        open: false
      },
    ]
  }
};
