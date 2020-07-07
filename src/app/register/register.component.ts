import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  stockForm:FormGroup;
  constructor(private fb:FormBuilder,private router:Router) {
    this.stockForm=this.fb.group({
      'fname': this.fb.control('',[Validators.required]),
      'lname': this.fb.control('',[Validators.required]),
      'email': this.fb.control('',[Validators.required]),
      'psw1': this.fb.control('',[Validators.required]),
      // 'psw2': this.fb.control('',[Validators.required]),
    });
   }

  
  ngOnInit(): void {
  }
  loginData=[];
  submitForm()
  {
    this.loginData.push(this.stockForm.value);
    localStorage.setItem("Login",JSON.stringify(this.loginData));
    alert("Account Sucessfully Created")
    this.router.navigateByUrl('/login');
  }

}

