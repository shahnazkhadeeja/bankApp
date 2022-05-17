import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ILogin } from '../login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: ILogin = { username: "admin", password: "admin123" };
  
  loginForm: any = FormGroup;
 
  // message: string;
  // returnUrl: string;
  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }


  login(){
    console.log(this.loginForm.controls);
    if (this.loginForm.invalid) {
      return;
  }
  else{
    if(this.f.username.value == this.model.username && this.f.password.value == this.model.password){
      console.log("Login successful");
      //this.authService.authLogin(this.model);
      // localStorage.setItem('isLoggedIn', "true");
      // localStorage.setItem('token', this.f.userid.value);
      this.router.navigate(['/viewlist']);
    }
    else{
      // 
      // this.window('plz enter correct data');
      console.log('error')
    }
  }    

  }
}
