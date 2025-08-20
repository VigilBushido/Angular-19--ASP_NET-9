import { Component, EventEmitter, Input, OnInit, Output, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActorCreationDTO, ActorDTO } from '../actors.model';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-actors-form',
  imports: [NzIconModule, NzButtonModule, ReactiveFormsModule, NzFormModule, NzInputModule, NzDatePickerModule, FormsModule],
  templateUrl: './actors-form.component.html',
  styleUrl: './actors-form.component.css'
})
export class ActorsFormComponent implements OnInit {

  @ViewChild('datePickerInput') datePickerInput: any;

  closeDatePicker(event: any) {
    // You can also add logic here to handle the selected date (event)
    // this.form.controls.dateOfBirth.setValue(event);
    this.datePickerInput.blur();
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  selectedDate: Date | null = null;
  // isDatePickerOpen = true;

  onDateSelect(date: Date): void {
    this.selectedDate = date;
    // this.isDatePickerOpen = false;
  }

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', { validators: [Validators.required] }],
    dateOfBirth: new FormControl<Date | null>(null)
  });

  @Input()
  model?: ActorDTO;

  @Output()
  postForm = new EventEmitter<ActorCreationDTO>();

  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  getErrorMessagesForName(): string {
    let field = this.form.controls.name;

    if (field.hasError('required')) {
      return "The name field is required";
    }

    return "";
  }

  saveChanges() {
    const actor = this.form.value as ActorCreationDTO;
    this.postForm.emit(actor);
  }

}
