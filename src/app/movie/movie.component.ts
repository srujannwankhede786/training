import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IMovie } from './movie';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})



export class MovieComponent {
  title: string = "Emovies";
  displayPic: boolean = false;
  borderRadius: number = 20;
  height: number = 100;
  width: number = 100;
  movies: IMovie[] = [{
    movieImg: "assets/image/avengers.jpeg",
    movieId: 1,
    movieName: 'AVENGERS',
    movieStar: 'ROBERT D JR',
    movieGenre: 'ACTION',
    movieRating: 10
  },{
    movieImg: "assets/image/avengers.jpeg",
    movieId: 2,
    movieName: 'AVENGERS2',
    movieStar: 'ROBERT D JR',
    movieGenre: 'ACTION',
    movieRating: 10
  }]

  toggleImage():void{
    this.displayPic  = !this.displayPic;
    console.log(this.displayPic);
  } 
}
