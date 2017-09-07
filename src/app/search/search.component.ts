import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Artist } from '../Artist';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  access_token:string = ''
	searchWord:string = '';
  searchRes:Artist[];

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
   
    this.route.queryParams.subscribe(
      params => { 
        console.log('token:' + params['access_token']);
        if (params['access_token'] !== undefined){
          this.access_token = params['access_token'];
          localStorage.setItem('a_token', this.access_token)
        }
      }  
    );

    console.log('access_token: ' + this.access_token);
  }

  onSearch(){
  	this.searchService.searchMusic(this.searchWord, 'artist', localStorage.getItem('a_token'))
  		.subscribe(res => {
        this.searchRes = res.artists.items;
  			console.log(res.artists.items);
  		})
  }
}
