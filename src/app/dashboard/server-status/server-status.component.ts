import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent {
  @Input() _currentStatus: string = 'online';
  get currentStatus() {
    return this._currentStatus;
  }
}
