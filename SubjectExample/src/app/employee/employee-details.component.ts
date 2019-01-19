import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent{
 // @Input() 
  titles: string = 'This page is Authorized!!!!!!!!!!'; 
  constructor() { }

}
