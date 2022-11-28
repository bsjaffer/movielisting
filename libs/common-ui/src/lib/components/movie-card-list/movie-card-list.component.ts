import { MovieCardItemComponent } from './../movie-card-item/movie-card-item.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Movies} from "@movie/common-ui";
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'movie-card-list',
  standalone: true,
  imports: [CommonModule, MovieCardItemComponent, MatGridListModule],
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.scss'],
})
export class MovieCardListComponent {

  @Input() items: Movies[]= [];
  @Output() onItemClick = new EventEmitter<Movies>();


  onClick(item: Movies){
    this.onItemClick.emit(item);
  }

  public itemIdentity(index:number,item:Movies){
    return item.id;
  }
}
