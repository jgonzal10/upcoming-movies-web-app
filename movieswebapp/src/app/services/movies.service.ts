import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IMovie } from '../models/movie';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  private _url: string = "/api";

  /**
   * Function to get the list of movies
   * @param page 
   * @return movies
   */
  getMovies(page:number): Observable<IMovie[]>{
  
    return this.http.get<IMovie[]>(this._url+'/movies?page='+page)
                    .catch(this.errorHandler);
  }


  /**
   * Funtion to get a movie details
   * @param movie_id 
   * @return movie
   */  
  getMovieDetails(movie_id:number): Observable<IMovie>{
  
    return this.http.get<IMovie>(this._url+'/moviedetails?movie_id='+movie_id)
                    .catch(this.errorHandler);
  }
/**
 * Function to filter movies
 * @param page 
 * @param query 
 * @return movies
 */
  searchMovies(page:number, query:string): Observable<any>{
  
    return this.http.get<any>(this._url+'/search?page='+page+'&query='+query)
                    .catch(this.errorHandler);
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
