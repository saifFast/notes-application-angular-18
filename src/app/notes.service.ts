import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer } from 'rxjs';

export class NoteInfo
{
  constructor()
  {
    this.id = 0;
    this.title = "";
  }

  id: number;
  title: string;
}

export class Note
{
  id:number;
  title: string;
  text: string;

  constructor()
  {
    this.id = 0;
    this.title = "";
    this.text = "";
  }

}

@Injectable({
  providedIn: 'root'
})

export class NotesService {

  private notes : Note[]  = [];
  private nextId = 0;
  private notesSubject  = new BehaviorSubject<NoteInfo[]>([]);  

  constructor() {
    var name = "notes";
    let localNotes = localStorage.getItem("notes");
    
    if(localNotes != null)
    { 
      this.notes = JSON.parse(localNotes);
    }

    for (const note of this.notes) 
    {
      if (note.id >= this.nextId) this.nextId = note.id+1;
    }
    this.update();
  }

  subscribe(observer : Observer<NoteInfo[]>)
  {
    this.notesSubject.subscribe(observer);
  }

  addNote(title: string, text: string): Note {
    const note = {id: this.nextId++, title, text};
    this.notes.push(note);
    this.update();
    return note;
  }

  getNote(id: number) : Note
  {
    let noteIndex = this.findIndex(id);
    return this.notes[noteIndex];
  }

  updateNote(id : number, title : string, text: string)
  {
    const noteIndex = this.findIndex(id);
    this.notes[noteIndex] = {id, title, text};
      this.update();
  }

   deleteNote(id: number)
   {
    const noteIndex = this.findIndex(id);
    this.notes.splice(noteIndex, 1);
   } 

   private update()
   {
    localStorage.setItem('notes', JSON.stringify(this.notes));
    this.notesSubject.next(this.notes.map(
      note => ({id: note.id, title: note.title})
    ));
   }

   private findIndex(id: number): number {
    for (let i=0; i<this.notes.length; i++) {
      if (this.notes[i].id === id) return i;
    }
    throw new Error(`Note with id ${id} was not found!`);
  }
}
