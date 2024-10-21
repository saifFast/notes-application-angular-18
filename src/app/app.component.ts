import { Component } from '@angular/core';
import { NotesComponent } from './notes/notes.component';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone : true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports : [NotesComponent, HomeComponent, RouterOutlet, CommonModule, RouterOutlet, RouterLink, RouterLinkActive]
})
export class AppComponent {
  public title = 'Angular Notes';
  constructor() {}
}
