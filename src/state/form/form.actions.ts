import { Action } from '@ngrx/store';

export const FORM_SUBMIT = '[Form] Submit';

export class FormSubmit implements Action {
  readonly type = FORM_SUBMIT;
  constructor(public payload: { email: string, password: string, gender: string, favColor: string}) {}
}

export type All = FormSubmit;


