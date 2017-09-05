import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { ActivatedRoute, Params } from '@angular/router'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  access_token:string = ''
	searchWord:string = '';
  
  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
   
    this.route.queryParams.subscribe(
      params => { this.access_token = params['access_token'];}  
    );

    console.log('access_token: ' + this.access_token);
  }

  onSearch(){
  	this.searchService.searchMusic('Aerosmith', 'artist', this.access_token)
  		.subscribe(res => {
  			console.log(res.artists.items);
  		})
  }
}
