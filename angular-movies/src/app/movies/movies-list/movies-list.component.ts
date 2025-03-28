import { CurrencyPipe, DatePipe, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GenericListComponent } from "../../shared/components/generic-list/generic-list.component";
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RatingComponent } from "../../shared/components/rating/rating.component";

@Component({
  selector: 'app-movies-list',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, GenericListComponent, NzButtonModule, NzIconModule, RatingComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {

  @Input({ required: true })
  movies!: any[];
  //movies: any[] | undefined;

  addMovie() {
    this.movies.push({
      title: 'Inception',
      releaseDate: new Date('2012-07-03'),
      revenue: 500
    });
  }

  removeMovie(movie: any) {
    let index = this.movies.findIndex((m: any) => m.title === movie.title);
    this.movies.splice(index, 1);
  }

  processRating(rate: number) {
    alert(`You rated the movie ${rate}`);
  }
}

