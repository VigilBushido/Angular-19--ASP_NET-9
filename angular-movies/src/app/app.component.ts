import { CurrencyPipe, DatePipe, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesListComponent } from "./movies/movies-list/movies-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MoviesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  topRatedMovies: any[] | undefined;
  upcomingReleasesMovies: any[] | undefined;

  constructor() {
    setTimeout(() => {
      this.topRatedMovies = [{
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
      }],
        this.upcomingReleasesMovies = [{
          title: 'Flight Risk',
          releaseDate: new Date(),
          revenue: 0,
          poster: 'https://www.themoviedb.org/t/p/w1280/4cR3hImKd78dSs652PAkSAyJ5Cx.jpg'
        },
        {
          title: 'Valiant One',
          releaseDate: new Date(),
          revenue: 0,
          poster: 'https://www.themoviedb.org/t/p/w1280/fLon5C3pQwPLPTV6eLr40NtVkfj.jpg'
        },
        {
          title: 'Inheritance',
          releaseDate: new Date(),
          revenue: 0,
          poster: 'https://www.themoviedb.org/t/p/w1280/v1ePqUG8QJro9NoGK7AOTdvtv4q.jpg'
        },
        {
          title: 'Dog Man ',
          releaseDate: new Date(),
          revenue: 0,
          poster: 'https://www.themoviedb.org/t/p/w1280/Ad0ZK9wUOKjyB8J90JvMUh0TQ4E.jpg'
        },
        {
          title: 'Presence',
          releaseDate: new Date(),
          revenue: 0,
          poster: 'https://www.themoviedb.org/t/p/w1280/6gwjrSIeaAulBBCjw8GoqSL3Mst.jpg'
        }];
    }, 2000);
  }
}
