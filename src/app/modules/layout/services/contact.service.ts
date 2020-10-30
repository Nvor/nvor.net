import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private emailServer: string;

  constructor(
    private httpClient: HttpClient
  ) { }

  PostEmail(input: any) {
    return this.httpClient.post(this.emailServer, input, { responseType: 'text' })
      .pipe(
        map(
          (response) => {
            if (response) {
              return response
            }
          },
          (error: any) => {
            return error;
          }
        )
      )
  }
}
