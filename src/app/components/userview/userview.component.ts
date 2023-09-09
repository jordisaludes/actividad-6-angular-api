import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';
import { Observer } from 'rxjs';



@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css'],
})
export class UserviewComponent {
  userId: string = '';
  arrUsers: User[] = [];
  userToShow: User | undefined;
  redirectOnDelete: string = '/home';

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params['userid'];
    });
    this.usersService.getAll().subscribe((data) => {
      this.arrUsers = data.results;
      this.userToShow = this.arrUsers.find((user) => user._id === this.userId);
    });
  }
  deleteUser(userId: string) {
    this.usersService.deleteUser(userId).subscribe({
      next: () => {
        alert('Usuario eliminado correctamente');
        this.router.navigate(['/home']); // Redirige a la lista de usuarios después de eliminar
      },
      error: (error) => {
        console.error('Ha ocurrido un error al eliminar al usuario:', error);
      },
    });
  }
}
