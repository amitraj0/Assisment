import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './Components/login/login.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { WelcomeHomeComponent } from './Components/welcome-home/welcome-home.component'; 
import {MatCardModule} from '@angular/material/card';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    LoginComponent,
    WelcomeHomeComponent,
    GalleryComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
