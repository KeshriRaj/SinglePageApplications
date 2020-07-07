import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDetails=[];
  userForm:FormGroup;
  constructor(private router:Router,private fb:FormBuilder) {
    this.userForm=this.fb.group({
      'email': this.fb.control('',[Validators.required]),
      'psw': this.fb.control('',[Validators.required]),
    });

   }

  ngOnInit(): void {
  }

  submitForm()
  {
    // alert("lfkm");
    // this.userDetails.push(JSON.parse(localStorage.getItem("Login")));
    // this.userDetails.forEach(element => {
    //   console.log("idojscvg",element);
      
    // });
    // for(var i=0;i<this.userDetails.length;i++)
    // {
    //   alert("b fv");
    //   console.log(this.userForm.value.email);
    //   console.log(this.userDetails[0].email);
    //   console.log(this.userDetails[i].email);

      // if(this.userDetails[i].email=this.userForm.value.email && this.userDetails[i].psw1==this.userForm.value.psw)
      // {
        this.router.navigate(['/forms']);
      // }
    }

}
