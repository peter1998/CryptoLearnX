import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user.model';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  $user!: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser().subscribe((user) => {
      this.$user = user;
    });
  }
}
