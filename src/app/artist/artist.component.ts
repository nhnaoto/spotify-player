import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service'
import { Artist } from '../Artist';
import { Album } from '../Album';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

	access_token:string = ''

	id: string;
	artist: Artist[];
  albums: Album[];

  constructor(
  	private searchService: SearchService,
  	private route: ActivatedRoute
  ) { }
 
  ngOnInit() {

  	this.route.params
  		.map(params => params['id'])
  		.subscribe((id) => {
  			this.searchService.getArtist(id, localStorage.getItem('a_token'))
  				.subscribe(artist => {
  						this.artist = artist;
  				})

        this.searchService.getAlbums(id, localStorage.getItem('a_token'))
          .subscribe(albums => {
              this.albums = albums.items;
              console.log(this.albums);
          })

  		})
  }

}
