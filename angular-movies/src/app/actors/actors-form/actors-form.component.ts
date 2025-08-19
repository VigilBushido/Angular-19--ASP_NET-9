import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActorCreationDTO, ActorDTO } from '../actors.model';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { getISOWeek } from 'date-fns';

@Component({
  selector: 'app-actors-form',
  imports: [NzIconModule, NzButtonModule, ReactiveFormsModule, NzFormModule, NzInputModule, NzDatePickerModule, FormsModule],
  templateUrl: './actors-form.component.html',
  styleUrl: './actors-form.component.css'
})
export class ActorsFormComponent implements OnInit {
  date = null;
  rangeDate = null;

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date): void {
    console.log('week: ', getISOWeek(result));
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
