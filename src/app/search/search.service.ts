import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
	
  private artistUrl: string;
  private albumsUrl: string;
  private albumUrl: string;


  constructor( private http:Http){
	}

  getToken(){
    console.log('service');
    return this.http.get('http://192.168.10.3:4200/authorize')
        .subscribe(res=> res.json());
  }


	searchMusic(str:string, type='artist', token:string){

    let searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=50&type='+type+'&market=US';
    let headers = new Headers();

    headers.append('Authorization' , 'Bearer ' + token);

    return this.http.get(searchUrl , {headers : headers})
       .map( res => res.json())
  }

  getArtist(id:string, token:string){

    this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
    let headers = new Headers();

    headers.append('Authorization' , 'Bearer ' + token);

    return this.http.get(this.artistUrl , {headers : headers})
       .map( res => res.json())
   }

  getAlbums(id:string, token:string){

    this.albumsUrl = 'https://api.spotify.com/v1/artists/'+id +'/albums';
    let headers = new Headers();

    headers.append('Authorization' , 'Bearer ' + token);

    return this.http.get(this.albumsUrl , {headers : headers})
       .map( res => res.json())
   }

  getAlbum(id:string, token:string){

    this.albumsUrl = 'https://api.spotify.com/v1/albums/'+id;
    let headers = new Headers();

    headers.append('Authorization' , 'Bearer ' + token);

    return this.http.get(this.albumsUrl , {headers : headers})
       .map( res => res.json())
  }


}