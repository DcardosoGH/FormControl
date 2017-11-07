import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { State } from '../../state/user/user.state';
import * as UserActions from '../../state/user/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  $User: Observable<State>;
  @ViewChild('f') loginForm: NgForm;

  constructor(private router: Router, private store: Store<any>) {
    this.$User = this.store.select('UserStore');
   }

  ngOnInit() {

  }

  onSubmit(f: NgForm) {
    this.store.dispatch(new UserActions.UserLogin({email: this.loginForm.value.email, password: this.loginForm.value.password}));
    // if (f.valid) {
    //   this.store.dispatch(new UserActions.UserLoginSuccess());
    // }
    // setTimeout(() => {
    //   this.router.navigate(['home']);
    // },
    // 1500);
  }
}
