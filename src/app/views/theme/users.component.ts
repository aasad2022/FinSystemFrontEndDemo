import {User} from "../../models/user";
import {UserService} from "../../services/user-service.service";
import {Component, OnInit} from '@angular/core';
import DataTables from "datatables.net-dt";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  users: User[] | undefined;

  constructor(private userService: UserService) {
  }


  dtOptions: DataTables.Settings = {};




  ngOnInit() {
    this.userService.findAll().subscribe(
      data => {
        console.log(data.content);
        this.users = data.content;
      }
    )
    ;
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }
}
