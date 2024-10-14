import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'notes', component: NotesComponent}
];

@NgModule({
  imports: 
  [NotesComponent,
    CommonModule,
      RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
   
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    AppRoutingModule,   
  ],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    HomeComponent,
    NotesComponent,
  ],
  
})


export class AppRoutingModule { }
