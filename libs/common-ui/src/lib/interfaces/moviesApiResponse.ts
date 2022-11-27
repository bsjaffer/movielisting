import {Movies} from "./movies"

export interface MoviesApiResponse {
    page: number;
    total_results: number;
    total_pages: number;
    email: string;
    results: Movies[];
  }