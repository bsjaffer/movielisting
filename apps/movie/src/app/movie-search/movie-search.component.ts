import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl } from '@angular/forms';
import { MovieApiService } from './../services/movieApi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-movie-search',
  standalone: true,
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
})
export class MovieSearchComponent {
  searchControl = new FormControl('');
  options: any[] = [];
  timer:any = null;

  constructor(public movieservice: MovieApiService, public router: Router) {}

  ngOnInit() {
    this.searchControl.valueChanges.subscribe((searchStr) => {
      searchStr = searchStr?.trim() || '';
      if (searchStr === '') {
      }else{
        this.search(searchStr);
      }
    });
  }

  private search(value: string) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
        this.movieservice.search(value).subscribe((data) => {
          this.options = data.results.map((s) => {
            return { name: s.name || s.title, value: s.id };
          });
        });
    },500);
   
  }

  public onClick(item: any) {
    this.searchControl.patchValue(item.name);
    this.router.navigate(['/details/' + item.value]);
  }
}
