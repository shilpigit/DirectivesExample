import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {
  public flag = true; // this is only for routing guard purpose use in If condition
  constructor() { }

  ngOnInit() {
  }

}
