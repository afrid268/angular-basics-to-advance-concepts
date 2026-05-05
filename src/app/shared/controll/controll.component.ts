import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-controll',
  standalone: true,
  imports: [],
  templateUrl: './controll.component.html',
  styleUrl: './controll.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
     class: 'controll'
  }
})
export class ControllComponent {

  label = input.required<string>();
}
