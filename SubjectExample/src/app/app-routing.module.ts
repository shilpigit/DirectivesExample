import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeCreateComponent} from './employee/employee-create.component';
import { EmployeeListComponent } from './employee/employee-list.component';

const routes: Routes = [
  {path:'employees', children:[
    { path: '' , component: EmployeeListComponent},
    { path:'create', component:EmployeeCreateComponent }    
    // {path: '', redirectTo:'/list', pathMatch:'full'}
  ]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
