import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

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


    changeNavbarColor() {
      this.appComponent.setWhiteBackground(); // Cambiar a color gris en el componente Home
    }
  
}
