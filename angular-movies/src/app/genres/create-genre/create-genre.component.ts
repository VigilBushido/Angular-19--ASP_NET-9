import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { firstLetterShouldBeUpperCase } from '../../shared/functions/validations';

@Component({
  selector: 'app-create-genre',
  imports: [NzIconModule, NzButtonModule, ReactiveFormsModule, NzFormModule, NzInputModule, RouterLink],
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css'
})
export class CreateGenreComponent {

  router = inject(Router);
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', { validators: [Validators.required, firstLetterShouldBeUpperCase()] }]
  });

  saveChanges() {
    console.log(this.form.value);
    //.. save changes
    this.router.navigate(['/genres']);

  }
}
