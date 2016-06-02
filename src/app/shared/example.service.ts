import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ExceptionService } from './exception.service'

@Injectable()
export class ExampleService {

  private endpoint: string = `api/users.json`;

  constructor(private http: Http, private exceptionSvc: ExceptionService) { }

  getUsers() {
    return this.http.get(this.endpoint, {})
      .map((response: Response) => <IUser[]>response.json().data)
      .toPromise();
    // .map((response: Response) => <User[]>response.json().data)
    // .forEach(next => console.log('next', next))
    // .catch(this.exceptionSvc.catchBadResponse);
    //.finally(() => console.warn('getUsers() complete'));
  }

  getItems(): Observable<IUser[]> {
    return this.http.get(this.endpoint)
      .map((response: Response) => <IUser[]>response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.exceptionSvc.catchBadResponse);
  }

}

export interface IUser {
  id: number;
  name: string;
  avatarSrc: string;
}