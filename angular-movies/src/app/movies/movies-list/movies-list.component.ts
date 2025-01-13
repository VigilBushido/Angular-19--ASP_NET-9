import { CurrencyPipe, DatePipe, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe, NgOptimizedImage],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  movies: any[] | undefined;

  constructor() {
    setTimeout(() => {
      this.movies = [{
        title: 'The Pursuit of Happyness',
        releaseDate: new Date(),
        revenue: 307077295.00,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lBYOKAMcxIvuk9s9hMuecB9dPBV.jpg'
      },
      {
        title: 'Iron Man',
        releaseDate: new Date(),
        revenue: 585174222.00,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/78lPtwv72eTNqFW9COBYI0dWDJa.jpg'
      },
      {
        title: 'Seven Pounds',
        releaseDate: new Date(),
        revenue: 168167691.00,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/85zUipgVy2QbvAJ6djZXYaGckMv.jpg'
      },
      {
        title: 'A Beautiful Mind',
        releaseDate: new Date(),
        revenue: 316800000.00,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rEIg5yJdNOt9fmX4P8gU9LeNoTQ.jpg'
      },
      {
        title: 'Cast Away',
        releaseDate: new Date(),
        revenue: 429632142.00,
        poster: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7lLJgKnAicAcR5UEuo8xhSMj18w.jpg'
      }];
    }, 2000);
  }
}
