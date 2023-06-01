import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    address: '123 Main St, Anytown, USA',
  };

  constructor() {}

  ngOnInit() {}
}
