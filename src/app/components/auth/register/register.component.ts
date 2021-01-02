import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/models/User.models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  Submit(){
    console.log('submit');

      this.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(Response => {
        console.log(Response);

      })
  }
}
