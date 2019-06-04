import { Component, OnInit  } from '@angular/core';
import { MatDialog } from '@angular/material';
import {IMovie} from '../models/movie'
import { MoviesService } from '../services/movies.service';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  currentPage:number =1;
  public movies : IMovie[];
  public selectedMovie :IMovie;
  public errorMsg;
  length = 1000;
  pageSize = 20;
  title:string;
  imageURL = 'https://image.tmdb.org/t/p/w500';

  
  constructor(private _movieService: MoviesService, public dialog: MatDialog) {  
    this._movieService.getMovies(this.currentPage).subscribe(data =>{  
      this.movies= this.transformURL(data)  
    }); 
    
    
  }
  /**
   * Change page event, it is in charge to reload movies, by page id.
   * @param event 
   */
  pageChanged(event){
    this.currentPage = event.pageIndex;
    this._movieService.getMovies(this.currentPage).subscribe(data =>{  
      this.movies= this.transformURL(data)  
    }); 
  }
  /**
   * Filter function
   * @param filterValue 
   */
  applyFilter(filterValue: string) {
   
    if(filterValue.length !==0){
      this._movieService.searchMovies(this.currentPage, filterValue).subscribe(data =>{  
          this.currentPage = 1;
          this.length = data.total_results;
          this.movies = data.results;  
      },err => console.log(err),()=>{
       this.movies= this.transformURL(this.movies)
      }); 
    }
  }


  ngOnInit() {
  }

  openDialog(movie_id:number): void {
    console.log('name selected', movie_id)

    this._movieService.getMovieDetails(movie_id).subscribe(data =>{
      data.poster_path = this.imageURL+data.poster_path;  
      this.selectedMovie = data;  
    }, err =>{ console.log(err)},()=>
    {
      const dialogRef = this.dialog.open(MovieDetailsComponent, {
        width: '500px',
        data: {data:this.selectedMovie}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.title = result
      });
    }
     
     ); 
  }
/**
 * Funtion to create the url for each image.
 * @param movies 
 */
  transformURL(movies:IMovie[]):IMovie[]{
    movies.map(movie => {
      movie.poster_path = this.imageURL+movie.poster_path
      movie.backdrop_path = this.imageURL+movie.backdrop_path;
    })
    return movies
  }
}
