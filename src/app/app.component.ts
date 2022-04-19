import {Component, Input, Output} from '@angular/core';
import {IUser} from "./@core/user/user.interface";
import {IMonster} from "./@core/monsters/monsters.intarface";
import {UserService} from "./@core/user/user.service";
import {MonstersService} from "./@core/monsters/monsters.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // public user: IUser ;
  // public monster: IMonster ;

  constructor(
    // userService: UserService,
    // monstersService: MonstersService,
  ) {
    // this.user = userService.getUserInfoFromLocal();

    // this.monster = {
    //   id: 0,
    //   name: ' элементаль',
    //   image: '',
    //   hpMax: 0,
    //   hp: 0,
    //   minAttack: 0,
    //   maxAttack: 0,
    //   currentAttack: 0,
    //   defence: 0,
    //   exp: 0,
    //   description: '0',
    // };
    // this.user = {
    //   id: 0,
    //   name: '',
    //   level: 1,
    //   hpMax: 0,
    //   hp: 0,
    //   exp: 0,
    //   expMax: 0,
    //   minAttack: 0,
    //   maxAttack: 0,
    //   currentAttack: 0,
    //   defence: 0,
    // }
  }



}
