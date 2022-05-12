import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestService {
  private newVersion = new Subject<string>();
  versionAnnounced$ = this.newVersion.asObservable();

  constructor() { }
  announceVersion(version: string) {
    this.newVersion.next(version);
  }
}
