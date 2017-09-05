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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: SearchComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
    ])
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
