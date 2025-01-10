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
    title: 'Cast Away',
    releaseDate: new Date(),
    revenue: 429632142.00
  };

  movies = [{
    title: 'The Pursuit of Happyness',
    releaseDate: new Date(),
    revenue: 307077295.00
  },
  {
    title: 'Iron Man',
    releaseDate: new Date(),
    revenue: 585174222.00
  },
  {
    title: 'Seven Pounds',
    releaseDate: new Date(),
    revenue: 168167691.00
  },
  {
    title: 'A Beautiful Mind',
    releaseDate: new Date(),
    revenue: 316800000.00
  }];

  duplicateNumber(value: number): number {
    return value * 2;
  };
}
