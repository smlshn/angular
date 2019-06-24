import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {ApiUserResponseInterface} from '../../../interfaces/api-user-response.interface';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  fetchUsers(page): Observable<ApiUserResponseInterface> {
    return this.http.get<ApiUserResponseInterface>('https://reqres.in/api/users?page=' + page);
  }

  fetchUserById(id: number): Observable<any> {
    return this.http.get<any>(`https://reqres.in/api/users/${id}`)
      .pipe(map(response => response.data ? response.data : response));
  }
}
