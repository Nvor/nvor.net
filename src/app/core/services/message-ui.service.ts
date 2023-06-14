import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageUiService {
  private _messages$: BehaviorSubject<string> = new BehaviorSubject<string>("");

  public messages$: Observable<string> = this._messages$.asObservable();

  constructor() { }

  getMessage(): Observable<string> {
    console.log('Msg Ui Service GET')
    return this._messages$.asObservable();
  }

  pushMessage(message: string): void {
    console.log('Msg Ui Service PUSH: ' + message)
    this._messages$.next(message);
  }
}
