import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubjectExampleComponent } from './subject-example/subject-example.component';
import { SubjectExample1Component } from './subject-example1/subject-example1.component';
import { EmployeeCreateComponent } from './employee/employee-create.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { NotfoundComponent } from './notfound.component';
import { EmployeeDetailsComponent } from './employee/employee-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectExampleComponent,
    SubjectExample1Component,
    EmployeeCreateComponent,
    EmployeeListComponent,
    NotfoundComponent,
    EmployeeDetailsComponent
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
