import { Action } from '@ngrx/store';

export const USER_LOG_IN = '[USER] LOG IN';
export const USER_LOG_OUT = '[USER] LOG OUT';
export const USER_LOG_IN_SUCCESS = '[USER] LOG IN SUCCESS';
export const USER_CHECK_AUTH = '[USER] CHECK AUTH';

export class UserLogin implements Action {
  readonly type = USER_LOG_IN;
  constructor(public paylad: {email: string, password: string}) {}
}

export class UserLogout implements Action {
  readonly type = USER_LOG_OUT;
}

export class UserLoginSuccess implements Action {
  readonly type = USER_LOG_IN_SUCCESS;
}

export class UserCheckAuth implements Action {
  readonly type = USER_CHECK_AUTH;
}


export type All = UserLogin | UserLoginSuccess | UserLogout | UserCheckAuth;
