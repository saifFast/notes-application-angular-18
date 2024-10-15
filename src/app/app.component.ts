import { Component } from '@angular/core';
import { NotesComponent } from './notes/notes.component';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone : true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports : [NotesComponent, HomeComponent]
})
export class AppComponent {
  public title = 'Angular Notes';
  constructor() {}
}
