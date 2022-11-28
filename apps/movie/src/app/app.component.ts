import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips';
import { Component } from '@angular/core';


@Component({
  standalone: true,
  selector: 'movie-root',
  imports: [RouterModule, MatToolbarModule, MatChipsModule, MovieSearchComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'movie';

  isSelected(path:string){
    return window.location.pathname === path
  }
}
