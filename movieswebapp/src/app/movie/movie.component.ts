import { Component, OnInit  } from '@angular/core';
import {IMovie} from '../models/movie'


const MOCK_DATA: IMovie[] = [
  
  {id: 1, name: 'Terminator', genre: 'Fiction'},
  {id: 2, name: 'Dumbo', genre: 'Fiction'},
  {id: 3, name: 'Crystal', genre: 'Drama'}
];

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movies = MOCK_DATA;

  constructor() { }

  ngOnInit() {
  }

}
