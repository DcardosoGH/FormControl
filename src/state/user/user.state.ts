export interface State {
  User: {
    email: string,
    password: string,
    isAuth: Boolean,
  };
  Loading: Boolean;
}

export const initialState: State = {
  User: {
    email: '',
    password: '',
    isAuth: false
  },
  Loading: false
};
