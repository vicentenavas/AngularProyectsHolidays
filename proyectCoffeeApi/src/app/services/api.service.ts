import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient){}
  private baseUrl = 'https://api.waifu.im/search/';

  getData(type: string){
    return this.http.get('https://api.waifu.im/search/?included_tags=raiden-shogun' + type)
  }

  getDataHome(){
    return this.http.get('https://api.waifu.im/search/?included_tags=raiden-shogun')
  }


  getDataNsfwbyTag(tag: String){ 
    const url = this.baseUrl + tag; // Construye la URL agregando el tag al final
    return this.http.get(url);

    }

 
}



