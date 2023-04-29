import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  newUser: NewUser = {
    name: '',
    email: '',
    pass: ''
  };

  constructor(private http: HttpClient) { }

  addUser(newUser: NewUser) {
    return this.http.post('http://localhost:2000/register', newUser);
  }

  onSubmit() {
    this.addUser(this.newUser).subscribe(
      response => console.log(response),
      error => console.log(error)
    );
  }

}
