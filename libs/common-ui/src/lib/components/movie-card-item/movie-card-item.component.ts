import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Movies} from "@movie/common-ui";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'
import {MatGridListModule} from '@angular/material/grid-list';
import { DateFormat } from '../../pipes/dateFormat.pipe';


@Component({
  selector: 'movie-card-item',
  standalone: true,
  imports: [CommonModule,MatCardModule, MatButtonModule,MatGridListModule, DateFormat],
  templateUrl: './movie-card-item.component.html',
  styleUrls: ['./movie-card-item.component.scss'],
})
export class MovieCardItemComponent {

  @Input() item!: Movies;

  @Output() onItemClick = new EventEmitter<Movies>();


  click(){
    this.onItemClick.emit(this.item);
  }

}
