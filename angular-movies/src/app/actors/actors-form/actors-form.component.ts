import { Component, EventEmitter, Input, OnInit, Output, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActorCreationDTO, ActorDTO } from '../actors.model';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { dateCannotBeInTheFuture } from '../../shared/functions/validations';
import { InputImgComponent } from "../../shared/components/input-img/input-img.component";

@Component({
  selector: 'app-actors-form',
  imports: [NzIconModule, NzButtonModule, ReactiveFormsModule, NzFormModule, NzInputModule, NzDatePickerModule, FormsModule, InputImgComponent],
  templateUrl: './actors-form.component.html',
  styleUrl: './actors-form.component.css'
})
export class ActorsFormComponent implements OnInit {

  @ViewChild('datePickerInput') datePickerInput: any;

  closeDatePicker(event: any) {
    // You can also add logic here to handle the selected date (event)
    console.log('Selected date:', event);
    // this.form.controls.dateOfBirth.setValue(event);
    this.datePickerInput.blur();
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  selectedDate: Date | null = null;
  // isDatePickerOpen = true;

  onDateSelect(event: any): void {
    // Handle the date change event
    const date = event as Date | null;
    this.selectedDate = date;
    console.log('Selected date:', this.selectedDate);
    console.log('Form value:', this.form.controls.dateOfBirth.value);
    // this.isDatePickerOpen = false;
  }

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', { validators: [Validators.required] }],
    dateOfBirth: new FormControl<Date | null>(null, { validators: [Validators.required, dateCannotBeInTheFuture()] })
  });

  @Input()
  model?: ActorDTO;

  @Output()
  postForm = new EventEmitter<ActorCreationDTO>();

  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }

    // Listen to form control value changes
    this.form.controls.dateOfBirth.valueChanges.subscribe(value => {
      console.log('Date of birth changed:', value);
      this.selectedDate = value;
    });
  }

  getErrorMessagesForName(): string {
    let field = this.form.controls.name;

    if (field.hasError('required')) {
      return "The name field is required";
    }

    return "";
  }

  getErrorMessagesForDateOfBirth(): string {
    let field = this.form.controls.dateOfBirth;

    if (field.hasError('required')) {
      return "The date of birth field is required";
    }

    if (field.hasError('dateCannotBeInTheFuture')) {
      return field.getError('dateCannotBeInTheFuture').message;
    }

    return "";
  }

  saveChanges() {
    const actor = this.form.value as ActorCreationDTO;
    this.postForm.emit(actor);
  }

}
