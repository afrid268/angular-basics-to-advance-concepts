import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-controll',
  standalone: true,
  imports: [],
  templateUrl: './controll.component.html',
  styleUrl: './controll.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
     class: 'controll',
     '(click)' : 'onClick()'//listens to event in text arwea component control
  }
})
export class ControllComponent {
 // @HostBinding('class') className = 'controll'; // looks at the prop name and add the prop to host element and sets the va;ue for the property , preferred not to use this , use host instead

  //@HostListener('click')   onClick() { 
  //   console.log("test clicked")
  // }//binds a method to an event 
  label = input.required<string>();

  private element = inject(ElementRef)

  onClick() { 
    console.log("test clicked");
    console.log(this.element)
  }
}
