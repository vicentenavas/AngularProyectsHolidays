import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


    
  response: any
  data: any;
  
  constructor(private service: ApiService, private appComponent: AppComponent){ }
  
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


}
