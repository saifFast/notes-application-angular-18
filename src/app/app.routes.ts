import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
// Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'notes', component: NotesComponent, canActivate: [OktaAuthGuard] }
];

@NgModule({
  imports: 
  [
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
    OktaAuthModule,
  ],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    HomeComponent,
    NotesComponent,
  ],
  
})


export class AppRoutingModule { }
