import {
  MovieCardListComponent,
  MoviesApiResponse,
  Movies,
} from '@movie/common-ui';
import { MovieApiService } from '../../services/movieApi.service';
import { Router, RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'movie-top-rated-movies',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    MovieCardListComponent,
  ],
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss'],
})
export class TopRatedMoviesComponent {

  movies: Movies[] = [];

  constructor(public movieservice: MovieApiService, public router: Router) {}
  ngOnInit() {
    this.movieservice
      .getTopRatedMovies()
      .subscribe((data: MoviesApiResponse) => {
        this.movies = data.results;
      });
  }

  onItemClick(item: Movies) {
    this.router.navigate(['/details/' + item.id]);
  }

}
