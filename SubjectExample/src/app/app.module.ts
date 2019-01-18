import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectExampleComponent } from './subject-example/subject-example.component';
import { SubjectExample1Component } from './subject-example1/subject-example1.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectExampleComponent,
    SubjectExample1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    SubjectExampleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
