import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  movie: Movie = {
    title: 'How To Train Your Dragon 2',
    rating: 7,
    description: 'When Hiccup and Toothless discover an ice cave that is home to hundreds of new wild dragons and the mysterious Dragon Rider, the two friends find themselves at the center of a battle to protect the peace. Its been five years since Hiccup and Toothless successfully united dragons and vikings on the island of Berk.',
    runtime: 102,
    releaseDate: 19-6-2014,
    movieThumbnail: "http://t3.gstatic.com/images?q=tbn:ANd9GcRlwH3IX6ZpJeHDMLkl9rxkAsvFcNpuHkT5Nq9T3EG7uxac6mGD"
  };

  constructor() { }

  ngOnInit() {
    
  }

}
