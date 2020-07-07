import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  stockForm:FormGroup;
  constructor(private fb:FormBuilder, private router:Router) {
    this.stockForm=this.fb.group({
    'name': this.fb.control('',[Validators.required]),
    'price': this.fb.control('',[Validators.required]),
    'stock' : this.fb.control('',[Validators.required])
  });

 }

 stockDetails=[];

 get_data=[];
 submitForm(){
   console.log("Hello");
   if(this.stockForm.valid)
   {
     console.log(this.stockForm.value);
     this.stockDetails.push(this.stockForm.value);
     console.log(this.stockDetails);
     
     this.get_data=JSON.parse(localStorage.getItem("StockData"));
     for(var i=0;i<this.stockDetails.length;i++)
     {
     this.get_data.push(this.stockDetails[i]);
     }
     console.log(this.get_data);
     let json=JSON.stringify(this.get_data);
     localStorage.setItem("StockData",json);
     alert("Sucessfuly Updated to Local Storage");
     this.router.navigateByUrl('/tables');
   }
 }
  x="";
  ngOnInit(): void {
    this.x="Kunal";

  }

}
