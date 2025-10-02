import { Component, EventEmitter, inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MovieCreationDTO, MovieDTO } from '../movies.models';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { InputImgComponent } from '../../shared/components/input-img/input-img.component';

@Component({
  selector: 'app-movies-form',
  imports: [NzIconModule, NzButtonModule, ReactiveFormsModule, NzFormModule, NzInputModule, NzDatePickerModule, FormsModule, InputImgComponent],
  templateUrl: './movies-form.component.html',
  styleUrl: './movies-form.component.css'
})
export class MoviesFormComponent implements OnInit {

  @Input()
  model?: MovieDTO;

  @Output()
  postForm = new EventEmitter<MovieCreationDTO>();

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
    trailer: '',
    poster: new FormControl<File | null>(null)
  });

  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }

    // Listen to form control value changes
    this.form.controls.releaseDate.valueChanges.subscribe(value => {
      console.log('Release date changed:', value);
      this.selectedDate = value;
    });
  }

  getErrorMessagesForDateOfBirth(): string {
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
