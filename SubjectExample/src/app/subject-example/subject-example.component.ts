import { Component, OnInit } from '@angular/core';
import { SubjectTestingService } from '../service/subject-testing.service';

@Component({
  selector: 'app-subject-example',
  templateUrl: './subject-example.component.html',
  styleUrls: ['./subject-example.component.scss']
})
export class SubjectExampleComponent implements OnInit {

  constructor(private _subjectTestingService : SubjectTestingService) { }

  ngOnInit() {
  }

  OnClick(val: string)
  {
    this._subjectTestingService._subObj.next(val);
  }

}
