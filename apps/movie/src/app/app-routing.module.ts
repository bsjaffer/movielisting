
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./movie-listing/movie-listing.component').then(
        (c) => c.MovieListingComponent
      ),
  },
  {
    path: 'details/:movie-id',
    loadComponent: () =>
      import('./movie-details/movie-details.component').then(
        (c) => c.MovieDetailsComponent
      ),
  },
  {
    path: 'toprated',
    loadComponent: () =>
      import('./top-rated-movies/top-rated-movies.component').then(
        (c) => c.TopRatedMoviesComponent
      ),
  },
  {
    path: 'trending',
    loadComponent: () =>
      import('./trending-movies/trending-movies.component').then(
        (c) => c.TrendingMoviesComponent
      ),
  },
];


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
