import {User} from "../../models/user";
import {UserService} from "../../services/user-service.service";
import {Component, OnInit} from '@angular/core';
import DataTables from "datatables.net-dt";
import LanguageSettings = DataTables.LanguageSettings;

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
    );

    const language: LanguageSettings = {
      emptyTable:     "لا توجد بيانات متوفرة",
      info:           "عرض _START_ الى _END_ من _TOTAL_ مدخلة",
      infoEmpty:      "عرض 0 الى 0 من 0 مدخلة",
      infoFiltered:   "(تصفية من _MAX_ مجموع المدخلات)",
      infoPostFix:    "",
      lengthMenu:     "عرض _MENU_ مدخلة",
      loadingRecords: "تحميل...",
      processing:     "Processing...",
      search:         "بحث:",
      zeroRecords:    "لم يتم العثور على سجلات مطابقة",
      paginate: {
        first:    "الاول",
        last:     "الاخير",
        next:     "التالي",
        previous: "السابق"
      },
      aria: {
        sortAscending:  ": activate to sort column ascending",
        sortDescending: ": activate to sort column descending"
      }
    };
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: language
    };
  }
}
