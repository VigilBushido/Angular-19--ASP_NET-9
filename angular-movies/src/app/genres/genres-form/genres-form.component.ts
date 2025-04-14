import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { firstLetterShouldBeUpperCase } from '../../shared/functions/validations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { GenreCreationDTO, GenreReadDTO } from '../genres.models';

@Component({
  selector: 'app-genres-form',
  imports: [NzIconModule, NzButtonModule, ReactiveFormsModule, NzFormModule, NzInputModule, RouterLink],
  templateUrl: './genres-form.component.html',
  styleUrl: './genres-form.component.css'
})
export class GenresFormComponent {

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', { validators: [Validators.required, firstLetterShouldBeUpperCase()] }]
  });
  @Input()
  model?: GenreReadDTO;

  @Output()
  postForm = new EventEmitter<GenreCreationDTO>;

  saveChanges() {
    // .. save changes

    const genre = this.form.value as GenreCreationDTO; // casting the form value into GenreCreationDTO type
    this.postForm.emit(genre);
  }
}
