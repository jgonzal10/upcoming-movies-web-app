import { Component, OnInit  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {IMovie} from '../models/movie'
import { MoviesService } from '../services/movies.service';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

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
  length = 500;
  pageSize = 20;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  title:string;

  // MatPaginator Output
  pageChanged(event){
    this.currentPage = event.pageIndex;
    this._movieService.getMovies(this.currentPage).subscribe(data =>{  
      this.movies = data;  
    }); 
  }


  constructor(private _movieService: MoviesService, public dialog: MatDialog) {

    this._movieService.getMovies(this.currentPage).subscribe(data =>{  
      this.movies = data;  
    }); 

    
  }
  applyFilter(filterValue: string) {
    //this.movies.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit() {
   // this.movies.paginator = this.paginator;
  }

  openDialog(movie_id:number): void {
    console.log('name selected', movie_id)

    this._movieService.getMovieDetails(movie_id).subscribe(data =>{  
      this.selectedMovie = data;  
      console.log('movie ', this.selectedMovie)
    }); 
    const dialogRef = this.dialog.open(MovieDetailsComponent, {
      width: '500px',
      data: {data:this.selectedMovie }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.title = result
    });
  }

}
