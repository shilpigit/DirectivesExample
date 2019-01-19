import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeCreateComponent} from './employee/employee-create.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { CreateEmployeeCanDeactivateGuardService } from './service/create-employee-can-deactivate-guard.service';
import { CanDeactivate } from '@angular/router/src/utils/preactivation';
import { NotfoundComponent } from './notfound.component';
import { EmployeeDetailsComponent } from './employee/employee-details.component';
import { CanActivateGuardService } from './service/can-activate-guard.service';

const routes: Routes = [
  {path:'employees', children:[
    { path: '' , component: EmployeeListComponent},
    {
       path:'create', 
       component:EmployeeCreateComponent,
       canDeactivate: [CreateEmployeeCanDeactivateGuardService]
      } ,
      {
        path:'details',
        component:EmployeeDetailsComponent,
        canActivate:[CanActivateGuardService]
      }   
    // {path: '', redirectTo:'/list', pathMatch:'full'}
  ]},
  {path:'notfound', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  //providers: [CreateEmployeeCanDeactivateGuardService, CanActivateGuardService]
})

export class AppRoutingModule { }
