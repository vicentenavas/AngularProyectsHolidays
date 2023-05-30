import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-nsfw',
  templateUrl: './nsfw.component.html',
  styleUrls: ['./nsfw.component.css']
})
export class NsfwComponent {


  anonymous = 'Anonym';
  response: any
  data: any;
  
constructor(private service: ApiService, private appComponent: AppComponent){}

  
getData(tag: string) {
  this.service.getDataNsfwbyTag(tag).subscribe(
    (data) => {
      this.response = data;
      console.log(data);
    },
    (error) => {
      // Manejar errores
      console.error(error);
    }
  );
}




}
