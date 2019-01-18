import { Component, OnInit } from '@angular/core';
import {SubjectTestingService} from '../service/subject-testing.service';

@Component({
  selector: 'app-subject-example1',
  templateUrl: './subject-example1.component.html',
  styleUrls: ['./subject-example1.component.scss']
})
export class SubjectExample1Component implements OnInit {

  public names: any= ['1','2'];

  constructor(private _subTestingServiceTwo: SubjectTestingService) { 
    this._subTestingServiceTwo.createObservable().subscribe((data)=>{
      this.names.push(data);
    })
  }

  ngOnInit() {
  }

}
