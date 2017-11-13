export interface State {
  User: {
    username: string,
    password: string,
    isAuth: Boolean,
  };
  Loading: Boolean;
}

export const initialState: State = {
  User: {
    username: '',
    password: '',
    isAuth: false
  },
  Loading: false
};
