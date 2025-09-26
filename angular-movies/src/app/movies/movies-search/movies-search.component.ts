import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzColDirective } from "ng-zorro-antd/grid";
import { NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzSelectModule } from 'ng-zorro-antd/select';
import { GenreReadDTO } from '../../genres/genres.models';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { MoviesSearchDTO } from './movies-search.models';

@Component({
  selector: 'app-movies-search',
  imports: [FormsModule, ReactiveFormsModule, NzColDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzInputModule, NzSelectModule, NzCheckboxModule, NzButtonComponent, MoviesListComponent],
  templateUrl: './movies-search.component.html',
  styleUrl: './movies-search.component.css'
})
export class MoviesSearchComponent implements OnInit {

  ngOnInit(): void {
    this.form.valueChanges.subscribe(values => {
      this.movies = this.moviesOriginal;
      this.filterMovies(values as MoviesSearchDTO);
      //console.log(values);
    });
  }

  filterMovies(values: MoviesSearchDTO) {
    if (values.title) {
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1);
      //this.movies = this.movies.filter(m => m.title.toLowerCase().includes(values.title.toLowerCase()));
    }
  }

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    title: '',
    genreId: 0,
    upcomingReleases: false,
    inTheaters: false
  });

  genres: GenreReadDTO[] = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Drama' }];

  moviesOriginal = [{
    title: 'Inside Out 2',
    releaseDate: new Date(),
    price: 1400.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832',
    genres: [1, 2, 3],
    upcomingRelease: true,
    inTheaters: false
  },
  {
    title: 'Moana 2',
    releaseDate: new Date('2016-05-03'),
    price: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg',
    genres: [3],
    upcomingRelease: false,
    inTheaters: true
  },
  {
    title: 'Bad Boys: Ride or Die',
    releaseDate: new Date('2016-05-03'),
    price: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg',
    genres: [1, 3],
    upcomingRelease: true,
    inTheaters: false
  },
  {
    title: 'Deadpool & Wolverine',
    releaseDate: new Date('2016-05-03'),
    price: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg',
    genres: [3],
    upcomingRelease: false,
    inTheaters: false

  },
  {
    title: 'Oppenheimer',
    releaseDate: new Date('2016-05-03'),
    price: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg',
    genres: [2],
    upcomingRelease: false,
    inTheaters: true
  },
  {
    title: 'The Flash',
    releaseDate: new Date('2016-05-03'),
    price: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg',
    genres: [1, 2, 3],
    upcomingRelease: true,
    inTheaters: false
  }];

  movies = this.moviesOriginal;

  clear() {
    this.form.patchValue({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false
    });
  }

}
