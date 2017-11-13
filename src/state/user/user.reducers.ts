import {State, initialState } from './user.state';
import * as UserActions from './user.actions';

export type Action = UserActions.All;

export default function UserReducer (state = initialState, action: Action) {
  switch (action.type) {
    case UserActions.USER_LOG_IN: {
      const newState = Object.assign({}, state);
      return {
        ...newState,
        Loading: true,
      };
    }
    case UserActions.USER_LOG_IN_SUCCESS: {
      const newState = Object.assign({}, state);
      return {
        ...newState,
        User: {
          username: action.payload.username,
          password: action.payload.password,
        },
        Loading: false,
      };
    }

    case UserActions.USER_LOG_OUT: {
      const newState = Object.assign({}, state);
      return {
        ...newState,
        User: {
          username: '',
          password: '',
          isAuth: false
        }
      };
    }

    case UserActions.USER_CHECK_AUTH: {
      return state.User.isAuth;
    }

    default:
      return state;

  }
}
