import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

   get_data=[];
  constructor(private router:Router) { 
   

  }


  ngOnInit(): void {
    this.get_data=JSON.parse(localStorage.getItem("StockData"));
    console.log(this.get_data);
    console.log(this.get_data[0]);
 
  }

  editrows(i:Number)
  {
    console.log(i);
    this.router.navigate(['/tables', i]);
  }
  deleterows(i:Number)
  {
    for (let j = 0; j< this.get_data.length; j++) {
      if(j==i)
      {
        console.log(i);
        var x= confirm("Are you Sure?")
        if(x)
        {
        this.get_data.splice(j,1);
        localStorage.clear();
        localStorage.setItem("StockData",JSON.stringify(this.get_data));
        }

      }
     
      
  }
  

  }
  addrows(){
    this.router.navigateByUrl('/forms');
  }

}
