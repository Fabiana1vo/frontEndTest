import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../../layout/nav/nav.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    SidebarComponent
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {



}
