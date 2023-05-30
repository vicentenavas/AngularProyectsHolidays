import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit{

  

  response: any
  data: any;
  
  constructor(private service: ApiService){ }
  
    ngOnInit(): void {
      this.service.getDataHome().subscribe(
        response =>{ 
        
          this.data = response;
          console.log(this.data)
        },
        error => { 
          console.log('error', error)
        }
      )
    }
  

    getNew(){
      this.service.getData("waifu").subscribe(
        response =>{ 
        
          this.data = response;
          console.log(this.data)
        },
        error => { 
          console.log('error', error)
        }
      )
    }
 
  }



  