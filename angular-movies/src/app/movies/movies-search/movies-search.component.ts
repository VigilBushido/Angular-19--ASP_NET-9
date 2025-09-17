import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzColDirective } from "ng-zorro-antd/grid";
import { NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent } from "ng-zorro-antd/form";
import { NzInputModule } from "ng-zorro-antd/input";
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-movies-search',
  imports: [FormsModule, ReactiveFormsModule, NzColDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzInputModule, NzSelectModule],
  templateUrl: './movies-search.component.html',
  styleUrl: './movies-search.component.css'
})
export class MoviesSearchComponent {

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    title: '',
    genreId: 0,
    upcomingReleases: false,
    inTheaters: false
  });

  selectedValue = null;

}
