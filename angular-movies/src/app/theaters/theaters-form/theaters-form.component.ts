import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NzFormModule } from "ng-zorro-antd/form";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzIconModule } from "ng-zorro-antd/icon";
import { MapComponent } from "../../shared/components/map/map.component";
import { TheaterCreationDTO, TheaterDTO } from '../theaters.models';

@Component({
  selector: 'app-theaters-form',
  imports: [ReactiveFormsModule, NzFormModule, NzButtonModule, NzInputModule, NzIconModule, RouterLink, MapComponent],
  templateUrl: './theaters-form.component.html',
  styleUrl: './theaters-form.component.css',
})
export class TheatersFormComponent implements OnInit {

  @Input()
  model?: TheaterDTO;

  @Output()
  postForm = new EventEmitter<TheaterCreationDTO>();

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', { validators: [Validators.required] }]
  });

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
    const theater = this.form.value as TheaterCreationDTO;
    this.postForm.emit(theater);
  }
}
