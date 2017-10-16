export interface State {
  form: {
    email: string;
    password: string;
    gender: string;
    favColor: string;
  };
}

export const initialState: State = {
  form: {
    email: '',
    password: '',
    gender: '',
    favColor: ''
  }
};

