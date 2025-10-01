import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MovieCreationDTO, MovieDTO } from '../movies.models';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-movies-form',
  imports: [],
  templateUrl: './movies-form.component.html',
  styleUrl: './movies-form.component.css'
})
export class MoviesFormComponent implements OnInit {

  @Input()
  model?: MovieDTO;

  @Output()
  postForm = new EventEmitter<MovieCreationDTO>();

  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    title: ['', { validators: [Validators.required] }],
    releaseDate: new FormControl<Date | null>(null),
    trailer: '',
    poster: new FormControl<File | null>(null)
  });

  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  handleFileSelection(file: File) {
    this.form.controls.poster.setValue(file);
  }

  saveChanges() {
    const movie = this.form.value as MovieCreationDTO;

    if (movie.releaseDate) {
      movie.releaseDate = new Date(movie.releaseDate);
    }
    if (typeof movie.poster === 'string') {
      movie.poster = undefined;
    }
    this.postForm.emit(movie);
  }

}
