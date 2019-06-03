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
  
  getMovies(page): Observable<IMovie[]>{
  
    return this.http.get<IMovie[]>(this._url+'/movies?page='+page)
                    .catch(this.errorHandler);
  }


    
  getMovieDetails(movie_id): Observable<IMovie>{
  
    return this.http.get<IMovie>(this._url+'/moviedetails?movie_id='+movie_id)
                    .catch(this.errorHandler);
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
