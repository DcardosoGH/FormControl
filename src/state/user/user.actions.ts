import { Action } from '@ngrx/store';

export const USER_LOG_IN = '[USER] LOG IN';
export const USER_LOG_IN_SUCCESS = '[USER] LOG IN SUCCESS';

export class UserLogin implements Action {
  readonly type = USER_LOG_IN;
  constructor(public paylad: {email: string, password: string}) {}
}

export class UserLoginSuccess implements Action {
  readonly type = USER_LOG_IN_SUCCESS;
}

export type All = UserLogin | UserLoginSuccess;
