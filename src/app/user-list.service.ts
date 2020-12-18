// DXLM I don't think the name has to match the component user-list, but I have changed it from jph-users to user-list for the time being
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class UserListService {
  usersUrl = 'http://jsonplaceholder.typicode.com/users';  // URL to web api

  constructor(
    private http: HttpClient
  )
  getUsers(): Observable<Users[]> {


  //   let endPoint: any[];
  //   endPoint = fetch('https://jsonplaceholder.typicode.com/users')
  // .then((response) => response.json())
  // .then((json) => console.log(json));
  //   return endPoint[0]
  }
}