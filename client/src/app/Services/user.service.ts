import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // TODO: refactor this service after server is ready
  private users: User[] = [
    {
      id: 1,
      username: 'john_doe',
      email: 'john_doe@example.com',
      firstName: 'John',
      lastName: 'Doe',
      profilePicture: 'https://i.redd.it/v0caqchbtn741.jpg',
    },
  ];

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUser(): Observable<User> {
    const user = this.users[0];
    return of(user);
  }

}
