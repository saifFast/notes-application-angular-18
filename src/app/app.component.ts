import { Component } from '@angular/core';
import { NotesComponent } from './notes/notes.component';


@Component({
  selector: 'app-root',
  standalone : true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports : [NotesComponent]
})
export class AppComponent {
  public title = 'Angular Notes';
  constructor() {}
}
