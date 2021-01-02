import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/models/User.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  Submit(){
    console.log('submit');

      this.auth.signInWithEmailAndPassword(this.user.email, this.user.password).then(Response => {
        console.log(Response);

      })
  }

}
