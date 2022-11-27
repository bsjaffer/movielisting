import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config';
import { Observable, throwError } from 'rxjs';
import {MoviesApiResponse, MovieDetails} from "@movie/common-ui";
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  apiURL = Config.apiUrl;

  constructor(private http: HttpClient) {
  }


  getAllMovies(): Observable<MoviesApiResponse>{
  return this.http.get<MoviesApiResponse>(`${this.apiURL}movie/popular?api_key=${Config.apiKey}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  search(query: string): Observable<MoviesApiResponse> {
    return this.http.get<MoviesApiResponse>(`${this.apiURL}search/movie?api_key=${Config.apiKey}&langualge=en-US&page=1&include_adult=false&query=${query}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getTrendingMovies(): Observable<MoviesApiResponse> {
    return this.http.get<MoviesApiResponse>(`${this.apiURL}trending/all/week?api_key=${Config.apiKey}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getTopRatedMovies(): Observable<MoviesApiResponse> {
    return this.http.get<MoviesApiResponse>(`${this.apiURL}movie/top_rated?api_key=${Config.apiKey}&language=en-US&page=1`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  getMovieDetails(id: number): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`${this.apiURL}movie/${id}?api_key=${Config.apiKey}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
