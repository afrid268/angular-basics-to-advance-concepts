import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { ServerTrafficStatusComponent } from './dashboard/server-traffic-status/server-traffic-status.component';
import { SupportTicketsComponent } from './dashboard/support-tickets/support-tickets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    NavbarComponent,
    DashboardItemComponent,
    ServerStatusComponent,
    ServerTrafficStatusComponent,
    SupportTicketsComponent,
  ],
})
export class AppComponent {}
