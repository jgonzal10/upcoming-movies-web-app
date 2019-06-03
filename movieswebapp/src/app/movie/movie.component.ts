import { Component, OnInit  } from '@angular/core';
import { PageEvent } from '@angular/material';
import {IMovie} from '../models/movie'
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  currentPage:number =1;
  public movies : IMovie[];
  public errorMsg;
  length = 500;
  pageSize = 20;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageChanged(event){
    this.currentPage = event.pageIndex;
    this._movieService.getMovies(this.currentPage).subscribe(data =>{  
      this.movies = data;  
    }); 
  }


  constructor(private _movieService: MoviesService) {

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

}
