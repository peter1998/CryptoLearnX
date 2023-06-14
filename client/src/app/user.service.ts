import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      id: 1,
      username: 'john_doe',
      email: 'john_doe@example.com',
      firstName: 'John',
      lastName: 'Doe',
      profilePicture: 'https://example.com/john_doe.jpg',
    },
    // Add more users if needed
  ];

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    // In a real-world application, you would fetch the users from an API using the HttpClient
    // For this example, we are just returning the mock users
    return of(this.users);
  }

  getUser(id: number): Observable<User> {
    // In a real-world application, you would fetch the user from an API using the HttpClient
    // For this example, we are just returning the user from the mock users
    const user = this.users.find((user) => user.id === id);
    return of(user);
  }

  // Add more methods as needed, such as updateUser, deleteUser, etc.
}
