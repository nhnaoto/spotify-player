import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search/search.service';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'artist/:id',
        component: ArtistComponent
      },
      {
        path: 'album/:id',
        component: AlbumComponent
      }
    ])
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
