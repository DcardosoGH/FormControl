import { State } from './../../state/form/form.state';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import * as FormActions from './../../state/form/form.actions';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  @ViewChild('f') testForm: NgForm;
  answer: string;
  genders = ['Male', 'Female'];
  $Form: Observable<State>;

  constructor(private store: Store<any>) {
    this.$Form = this.store.select('aboutFormStore');
   }

  ngOnInit() {
  }

  suggestEmail() {
    const defaultEmail = 'test@test.com';
    this.testForm.form.patchValue({email: defaultEmail});
  }

  onSubmit() {
    this.store.dispatch({type: FormActions.FORM_SUBMIT,
                        payload: {
                          email: this.testForm.value.email,
                          password: this.testForm.value.password,
                          gender: this.testForm.value.gender,
                          favColor: this.testForm.value.questionAnswer
                        }});
  }



}
