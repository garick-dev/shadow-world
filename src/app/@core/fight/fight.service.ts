import { Injectable } from '@angular/core';
import {UserService} from "../user/user.service";
import {MonstersService} from "../monsters/monsters.service";
import {Observable, combineLatest} from "rxjs";
import {IMonster} from "../monsters/monsters.intarface";
import {IUser} from "../user/user.interface";

@Injectable({
  providedIn: 'root'
})
export class FightService {

  public user: Observable<IUser> = this.userService.user$;
  public monster: Observable<IMonster> = this.monstersService.monster$;

  constructor(
    private readonly userService: UserService,
    private readonly monstersService: MonstersService,
  ) {
  }

  public attack(): void{
    combineLatest([this.user, this.monster]).subscribe(
      ([user, monster]) => {
        if (user && monster) {
          user.currentAttack = Math.floor((user.minAttack - monster.defence) + Math.random() * (((user.maxAttack + 1 - monster.defence) - (user.minAttack - monster.defence))));
          monster.currentAttack = Math.floor((monster.minAttack - user.defence) + Math.random() * (((monster.maxAttack + 1 - user.defence) - (monster.minAttack - user.defence))));
          if (user.currentAttack !== monster.hp && user.currentAttack < monster.hp) {
            user.hp = user.hp - monster.currentAttack;
            monster.hp = monster.hp - user.currentAttack;
            this.userService.setUserInfoToLocal(user);
          }
          else {
            user.currentAttack = monster.hp;
            monster.hp = monster.hp - user.currentAttack;
            user.hp -= monster.currentAttack;
            user.exp += monster.exp;
            this.userService.setUserInfoToLocal(user);
            this.userService.setStyleForExp(user);
          }
        }
      }
    )
  }

}
