export interface State {
  User: {
    email: string,
    password: string,
    isAuth: Boolean,
  };
}

export const initialState: State = {
  User: {
    email: '',
    password: '',
    isAuth: false
  }
};
