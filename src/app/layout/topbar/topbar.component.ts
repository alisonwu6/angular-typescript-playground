import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    MatToolbarModule, 
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  @Output() toggleSidenav = new EventEmitter<void>(); // 發送事件給 AppComponent
}
