import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user';


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
  btnText = 'Actualizar';

  constructor(private usersService: UsersService) {}
 
}
