import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageUiService {
  private _messages$: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor() { }

  getMessage(): Observable<string> {
    return this._messages$.asObservable();
  }

  pushMessage(message: string): void {
    this._messages$.next(message);
  }
}
