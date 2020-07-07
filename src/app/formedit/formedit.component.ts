import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formedit',
  templateUrl: './formedit.component.html',
  styleUrls: ['./formedit.component.css']
})
export class FormeditComponent implements OnInit {

  get_data=[];
  stockForm:FormGroup
  name;
  price;
  stock;
  constructor(private fb:FormBuilder,private router:ActivatedRoute,private router2:Router) { 
    let id = this.router.snapshot.params.id;
    this.get_data=JSON.parse(localStorage.getItem("StockData"));
    this.getDataValue=this.get_data[id];
    console.log(this.get_data[id]);
    this.name =this.get_data[id].name;
    this.price=this.get_data[id].price;
    this.stock=this.get_data[id].stock;
    console.log("constructor",this.name);

    this.stockForm=this.fb.group({
      'name': this.fb.control(this.name,[Validators.required]),
      'price': this.fb.control(this.price,[Validators.required]),
      'stock' : this.fb.control(this.stock,[Validators.required])
    });

  }
  getDataValue;
  ngOnInit(): void {
  }

  editedData=[];
  finalData=[];
  submitForm()
  {    
    this.editedData=JSON.parse(localStorage.getItem("StockData"));
    for(var i=0;i<this.editedData.length;i++)
    {
      if(this.editedData[i].name==this.name && this.editedData[i].price==this.price && this.editedData[i].stock==this.stock)
      {
        continue;
      }
      else
      {
      this.finalData.push(this.editedData[i]);
      }
    }
    this.finalData.push(this.stockForm.value);
    console.log("Final Data",this.finalData);
    localStorage.clear();
    let json=JSON.stringify(this.finalData);
    localStorage.setItem("StockData",json);
    alert("Sucessfuly Edited");
     this.router2.navigateByUrl('/tables');
  }

}
