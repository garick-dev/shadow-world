import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
export class LogsComponent implements OnInit {

  public user: Observable<IUser> = this.userService.user$.pipe(
    tap((user)=> {
      this.setStyleForExp(user);
    })
  );
  public monster: Observable<IMonster> = this.monsterService.monster$;

  constructor(
    private readonly userService: UserService,
    private readonly monsterService: MonstersService,
    private readonly fightService: FightService,
  ) {
  }

  ngOnInit(): void { }


  public setStyleForExp(user: IUser): void {
    const expEl = document.querySelector<HTMLElement>(".exp__inner");
    if (expEl) {
      const expPercent = (user.exp / user.expMax) * 100;
      expEl.style.width = `${expPercent}%`;
    }
  }

  public attack(): void {
    this.fightService.attack();
  }

}
