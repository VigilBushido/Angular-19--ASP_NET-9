import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-index-theaters',
  imports: [RouterLink, NzIconModule, NzButtonModule],
  templateUrl: './index-theaters.component.html',
  styleUrl: './index-theaters.component.css'
})
export class IndexTheatersComponent {

}
