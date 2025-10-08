import { Component, EventEmitter, inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MovieCreationDTO, MovieDTO } from '../movies.models';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { InputImgComponent } from '../../shared/components/input-img/input-img.component';
import { MultipleSelectorDTO } from '../../shared/components/multiple-selector/MultipleSelectorDTO';
import { MultipleSelectorComponent } from "../../shared/components/multiple-selector/multiple-selector.component";

@Component({
  selector: 'app-movies-form',
  imports: [NzIconModule, NzButtonModule, ReactiveFormsModule, NzFormModule, NzInputModule, NzDatePickerModule, FormsModule, InputImgComponent, RouterLink, MultipleSelectorComponent],
  templateUrl: './movies-form.component.html',
  styleUrl: './movies-form.component.css'
})
export class MoviesFormComponent implements OnInit {

  @Input()
  model?: MovieDTO;

  @Output()
  postForm = new EventEmitter<MovieCreationDTO>();

  @Input({ required: true })
  selectedGenres!: MultipleSelectorDTO[];

  @Input({ required: true })
  nonSelectedGenres!: MultipleSelectorDTO[];

  @ViewChild('datePickerInput') datePickerInput: any;

  closeDatePicker(event: any) {
    // You can also add logic here to handle the selected date (event)
    console.log('Selected date:', event);
    // this.form.controls.dateOfBirth.setValue(event);
    this.datePickerInput.blur();
  }

  selectedDate: Date | null = null;

  onDateSelect(event: any): void {
    // Handle the date change event
    const date = event as Date | null;
    this.selectedDate = date;
    console.log('Selected date:', this.selectedDate);
    console.log('Form value:', this.form.controls.releaseDate.value);
    // this.isDatePickerOpen = false;
  }

  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    title: ['', { validators: [Validators.required] }],
    releaseDate: new FormControl<Date | null>(null),
    trailer: [''],
    poster: new FormControl<File | string | null>(null)
  });

  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue({
        title: this.model.title,
        releaseDate: this.model.releaseDate,
        trailer: this.model.trailer,
        poster: this.model.poster || null
      });
    }

    // Listen to form control value changes
    this.form.controls.releaseDate.valueChanges.subscribe(value => {
      console.log('Release date changed:', value);
      this.selectedDate = value;
    });
  }

  getErrorMessagesForReleaseDate(): string {
    let field = this.form.controls.releaseDate;

    if (field.hasError('required')) {
      return "The release date field is required";
    }

    if (field.hasError('dateCannotBeInTheFuture')) {
      return field.getError('dateCannotBeInTheFuture').message;
    }

    return "";
  }

  handleFileSelection(file: File) {
    this.form.controls.poster.setValue(file);
  }

  saveChanges() {
    const formValue = this.form.value;
    const movie: MovieCreationDTO = {
      title: formValue.title || '',
      releaseDate: formValue.releaseDate ? new Date(formValue.releaseDate) : new Date(),
      trailer: formValue.trailer || '',
      poster: formValue.poster instanceof File ? formValue.poster : undefined
    };

    if (typeof movie.poster === 'string') {
      movie.poster = undefined;
    }

    const genresIds = this.selectedGenres.map(val => val.key);
    movie.genresIds = genresIds;

    this.postForm.emit(movie);
  }

}
