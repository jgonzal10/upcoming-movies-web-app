import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {IMovie} from '../models/movie'
 
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<MovieDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IMovie) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log(this.data)
  }

}
