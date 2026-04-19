import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-traffic-status',
  standalone: true,
  imports: [],
  templateUrl: './server-traffic-status.component.html',
  styleUrl: './server-traffic-status.component.css',
})
export class ServerTrafficStatusComponent {
  @Input() trafficData: { id: string; value: number }[] = [];
  @Input() maxTraffic: number = 0;
}
