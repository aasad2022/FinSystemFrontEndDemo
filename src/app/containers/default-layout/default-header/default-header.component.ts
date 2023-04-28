import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import {TokenStorageService} from "../../../services/login/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private router: Router,private tokenStorageService: TokenStorageService,private classToggler: ClassToggleService) {
    super();
  }
  logout(): void {
    this.tokenStorageService.signOut();
    // window.location.reload();
    this.router.navigate(['/login']);
  }
}
