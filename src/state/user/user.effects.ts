import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import * as UserActions from './user.actions';
import * as Encript from './../../state/user/sha2';
import { log } from 'util';
export type Action = UserActions.All;

@Injectable()
export class UserEffects {

  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private router: Router
  ) {}

  LoginRequest(username, password) {
    const encPass = Encript.b64_sha512(password);
    return {"ServerRequest":"LoginRequest",
    "RequestData":{"LoginUser":username,
    "LoginHashPassword":encPass,
    "LoginPassword":null,
    "LoginIIS":false},
    "RequestSession":null
  }
}

  EncodeLogin(req) {
    const encodedurl = "ajax_req=" + encodeURIComponent(req);
    return encodedurl;
  }


  @Effect() login$: Observable<Action> = this.actions$.ofType(UserActions.USER_LOG_IN)
    .mergeMap(action =>
      // [ Hack ] should typeckeck `payload`
      this.http.get('https://jsonplaceholder.typicode.com/posts/1', action['payload'])
        .do(data => console.log('payload', action['payload']))
        .do(data => this.LoginRequest(action['payload'].username, action['payload'].password))
        .do(data => this.router.navigate(['home']))
        .map(data => ({ type: UserActions.USER_LOG_IN_SUCCESS, payload: {
          username: action['payload'].username,
          password: action['payload'].password,
        } }))

        // .catch(() => of({ type: UserActions.ADD_TODO_FAIL }))
    );
}
