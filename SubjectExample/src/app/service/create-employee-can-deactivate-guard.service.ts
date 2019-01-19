import { EmployeeCreateComponent } from '../employee/employee-create.component';
import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<EmployeeCreateComponent>{
    canDeactivate(component: EmployeeCreateComponent): boolean{
        if(component.flag == true)
        {
           
            return confirm('exit from create employee page!!!');
        }
        return true;
    }
}
