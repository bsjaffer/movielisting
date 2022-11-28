import {MovieCardListComponent, MoviesApiResponse , Movies} from "@movie/common-ui"
import { MovieApiService } from './../../services/movieApi.service';
import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'movie-movie-listing',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule, FormsModule, MovieCardListComponent],
  templateUrl: './movie-listing.component.html',
  styleUrls: ['./movie-listing.component.scss'],
})
export class MovieListingComponent {
  movies: any = [];

  constructor(public movieservice: MovieApiService, public router: Router) {
   
  }

  ngOnInit() {
    this.movieservice.getAllMovies().subscribe((data: MoviesApiResponse) => {
      this.movies = data.results;
    });
  }
  onItemClick(item:Movies){
      this.router.navigate(['/details/'+item.id]);
     
  }
}
