import { Component } from '@angular/core';
import { SubjectTestingService } from './service/subject-testing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SubjectExample';
  userList: any = ['A','B'];

  constructor(private _subTestingService: SubjectTestingService){
    this._subTestingService.createObservable().subscribe((data) => {
      this.userList.push(data);
    })
  }
}
