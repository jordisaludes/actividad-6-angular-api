import { Component, Input , Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent {
  userId: string = '';
  arrUsers: User[] = [];
  userToShow: User | undefined;
  @Input() btnText: string = '';
  @Output() deleteClick: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
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

  onDeleteClick() {
    this.deleteClick.emit()
  }
}
