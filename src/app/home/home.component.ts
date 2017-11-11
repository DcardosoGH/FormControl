import { Component, OnInit } from '@angular/core';
import * as Encript from './../../state/user/sha2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  B64_Password:string;
  Sha512_Password:string;
  password: string;
  constructor() { }

  ngOnInit() {
  }

  encode(){         
   this.B64_Password = Encript.b64_sha512(this.password) + "==";
        
  }

}
