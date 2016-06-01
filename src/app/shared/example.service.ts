import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ExceptionService } from './exception.service'

@Injectable()
export class ExampleService {

  constructor(private http: Http, private exceptionSvc: ExceptionService) {}

  getUsers(){
        return this.http.get(`public/api/users.json`)
          .map((response: Response) => <User[]>response.json().data)
          .catch(this.exceptionSvc.catchBadResponse)
          .finally(() => console.warn('getUsers() complete'));
  }

}

export interface User {
  id: number;
  name: string;
  avatarSrc: string;
}