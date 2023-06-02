import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  subject = new Subject<any>();

  getButtonClick() {
    return this.subject.asObservable();
  }
}
