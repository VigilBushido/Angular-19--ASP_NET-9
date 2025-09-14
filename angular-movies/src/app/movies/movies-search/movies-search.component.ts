import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-movies-search',
  imports: [],
  templateUrl: './movies-search.component.html',
  styleUrl: './movies-search.component.css'
})
export class MoviesSearchComponent {

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    title: '',
    genreId: 0,
    upcomingReleases: false,
    inTheaters: false
  });

}
