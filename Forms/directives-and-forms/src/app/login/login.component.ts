import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formSubmitHandler(form: NgForm) {
    const { email, password } = form.value;


    if (form.invalid) {
      alert('Please enter valid data')
    } else {
      console.log(email, password);
    }
    

    form.reset(); // -> One way to reset 
    //form.setValue({ email: '', password: '' }); -> Second way to reset 
  }
}
