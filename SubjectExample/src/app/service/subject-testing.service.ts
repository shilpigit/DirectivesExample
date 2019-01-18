import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectTestingService {

  _subObj = new Subject<any>();
  
  createObservable(){
    return this._subObj.asObservable();
  }
}
