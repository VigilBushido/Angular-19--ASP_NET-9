import { Component, Input, numberAttribute } from '@angular/core';
import { MultipleSelectorDTO } from '../../shared/components/multiple-selector/MultipleSelectorDTO';
import { MovieCreationDTO } from '../movies.models';
import { MoviesFormComponent } from "../movies-form/movies-form.component";

@Component({
  selector: 'app-edit-movie',
  imports: [MoviesFormComponent],
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.css'
})
export class EditMovieComponent {

  @Input({ transform: numberAttribute })
  id!: number;



  nonSelectedGenres: MultipleSelectorDTO[] = [
    { key: 1, description: 'Action' },
    { key: 3, description: 'Drama' }
  ];

  selectedGenres: MultipleSelectorDTO[] = [
    { key: 2, description: 'Comedy' },
  ];

  nonSelectedTheaters: MultipleSelectorDTO[] = [
    { key: 1, description: 'Acropolis' },
  ];

  selectedTheaters: MultipleSelectorDTO[] = [
    { key: 2, description: 'Agora Mall' },
  ];

  saveChanges(movie: MovieCreationDTO) {
    console.log('Editing the movie', movie);
  }
}
