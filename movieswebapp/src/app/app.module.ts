import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialmoduleModule} from './material/materialmodule/materialmodule.module'
import { MoviesService } from './services/movies.service';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [
    AppComponent,    
    MovieComponent, 
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialmoduleModule,
    FlexLayoutModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent],
  entryComponents: [MovieDetailsComponent]
})
export class AppModule { }
