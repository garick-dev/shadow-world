import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from "../../@core/user/user.interface";
import {UserService} from "../../@core/user/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public readonly user: Observable<IUser> = this.userService.user$;

  constructor(
    private readonly userService: UserService,
  ) {
    // this.user = userService.getUserInfoFromLocal();
  }


  ngOnInit(): void {
  }

}
