import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, UpperCasePipe, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-movies';
  single_movie = {
    title: 'Castaway',
    releaseDate: new Date(),
    price: 1400.99
  };

  movies = [{
    title: 'Pursuit of Happiness',
    releaseDate: new Date(),
    price: 2200.99
  },
  {
    title: 'Iron Man',
    releaseDate: new Date(),
    price: 1700.99
  },
  {
    title: 'Seven Pounds',
    releaseDate: new Date(),
    price: 2800.99
  },
  {
    title: 'A Beautiful Mind',
    releaseDate: new Date(),
    price: 1999.99
  }];

  duplicateNumber(value: number): number {
    return value * 2;
  };
}
