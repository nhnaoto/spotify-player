import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
	
  constructor( private http:Http){
	}

  getToken(){
    console.log('service');
    return this.http.get('http://192.168.10.3:4200/authorize')
        .subscribe(res=> res.json());
  }


	searchMusic(str:string, type='artist', token:string){

    let searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=50&type='+type;
    let headers = new Headers();

    headers.append('Authorization' , 'Bearer ' + token);

    return this.http.get(searchUrl , {headers : headers})
       .map((res) => res.json())
  }

}