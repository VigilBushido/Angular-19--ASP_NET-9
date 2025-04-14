import { Component, Input, numberAttribute } from '@angular/core';
import { GenreReadDTO, GenreUpdateDTO } from '../genres.models';
import { GenresFormComponent } from "../genres-form/genres-form.component";

@Component({
  selector: 'app-edit-genre',
  imports: [GenresFormComponent],
  templateUrl: './edit-genre.component.html',
  styleUrl: './edit-genre.component.css'
})
export class EditGenreComponent {

  @Input({ transform: numberAttribute })
  id!: number;

  model: GenreReadDTO = { id: 1, name: 'Comedy' };

  saveChanges(genre: GenreUpdateDTO) {
    console.log('editing the genre', genre);
  }
}
