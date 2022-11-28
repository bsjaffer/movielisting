import { MovieDetails, RuntimeFormat, DateFormat } from '@movie/common-ui';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieApiService } from '../../services/movieApi.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'movie-movie-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatGridListModule,
    MatChipsModule,
    MatCardModule,
    RuntimeFormat,
    DateFormat
  ],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent {
  details!: MovieDetails;
  constructor(
    public movieservice: MovieApiService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    const movieId: string = this.route.snapshot.paramMap.get('movie-id') || '';
    if (movieId) {
      this.movieservice
        .getMovieDetails(parseInt(movieId))
        .subscribe((data: MovieDetails) => {
          this.details = data;
        });
    }
  }
  genreIdentity(index:number, item: any){
    return item.id
  }
}
