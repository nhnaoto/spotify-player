import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service'
import { Album } from '../Album';
import { ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

	album:Album;
	
  constructor(
  	private searchService: SearchService,
  	private route: ActivatedRoute
  ) { }
 

  ngOnInit() {
  	this.route.params
  		.map(params => params['id'])
  		.subscribe((id) => {
  			this.searchService.getAlbum(id, localStorage.getItem('a_token'))
  				.subscribe(album => {
  						this.album = album;
  				})
  		})
  }

}
