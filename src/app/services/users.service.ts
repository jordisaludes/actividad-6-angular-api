import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersDbUrl: string = 'https://peticiones.online/api/users';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(this.usersDbUrl);
  }

  deleteUser(id: string): Observable<void> {
    const deleteUrl = `${this.usersDbUrl}/${id}`;
    return this.httpClient.delete<void>(deleteUrl);
  }

}
