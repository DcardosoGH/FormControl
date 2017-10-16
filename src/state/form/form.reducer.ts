import {State, initialState} from '../../state/form/form.state';
import * as formActions from '../../state/form/form.actions';

export type Action = formActions.All;


export default function formReducer(state = initialState, action: Action): State  {
  switch (action.type) {
    case formActions.FORM_SUBMIT: {
      const newState = Object.assign({}, state);
      newState.form = {
        email: action.payload.email,
        password: action.payload.password,
        gender: action.payload.gender,
        favColor: action.payload.favColor
      };
      return newState;
    }
    default: {
      return state;
    }
  }
}
