import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {IMonster} from "../../@core/monsters/monsters.intarface";
import {IUser} from "../../@core/user/user.interface";
import {UserService} from "../../@core/user/user.service";
import {MonstersService} from "../../@core/monsters/monsters.service";
import {debounceTime, Observable, switchMap, tap} from "rxjs";
import {FightService} from "../../@core/fight/fight.service";

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit, OnDestroy {

  public user: Observable<IUser> = this.userService.user$;
  public monster: Observable<IMonster> = this.monsterService.monster$;

  constructor(
    private readonly userService: UserService,
    private readonly monsterService: MonstersService,
    private readonly fightService: FightService,
  ) {
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.user.subscribe(
      (user) => {
        user.currentAttack = -1;
        this.userService.setUserInfoToLocal(user);
      }
    )
    this.monster.subscribe(
      (monster) => {
        monster.currentAttack = -1;
        monster.hp = monster.hpMax;
        this.monsterService.setMonsterToLocal(monster);
      }
    )
  }

  public attack(): void {
    this.fightService.attack();
  }

}
