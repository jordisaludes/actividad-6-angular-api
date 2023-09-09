import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  arrUsers: User[] = [];
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getAll().subscribe((data) => {
      this.arrUsers = data.results;
    });
  }

}
