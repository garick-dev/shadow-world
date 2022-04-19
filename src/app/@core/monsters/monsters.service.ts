import {Inject, Injectable} from '@angular/core';
import {IMonster} from "./monsters.intarface";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {IUser} from "../user/user.interface";
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class MonstersService {

  private readonly monster: BehaviorSubject<IMonster> = new BehaviorSubject<IMonster>(this.storage.get('monsters') ?? null);
  public monster$: Observable<IMonster> = this.monster.asObservable().pipe(
    tap((user) => this.storage.set('user', user)),
  );

  private readonly monsterInfo: IMonster = {
    id: 1,
    name: 'Огненый элементаль',
    image: './assets/monster.gif',
    hpMax: 1500,
    hp: 1500,
    minAttack: 50,
    maxAttack: 70,
    currentAttack: -1,
    defence: 30,
    exp: 350,
    description: 'У Игурсуса больше всего жизней во всех легендах о монстрах! У него также очень высокая Сила и одна из самых сильных черт в игре: Гора! Он как нерушимая стена для своей команды, потому что всего одним умением он получит все атаки по одной цели и нанесет урон обратно врагам! Игурсус также может получить щиты, чтобы повысить свою выживаемость, а также ожог и применение зыбучих песков.',
  }

  constructor(
    @Inject(LOCAL_STORAGE) private readonly storage: StorageService,
  ) {
    this.setMonstersToLocal();
  }

  public setMonstersToLocal(): void {
      const monsterString = JSON.stringify(this.monsterInfo);
      localStorage.setItem('monsters', monsterString);
  }

  // public getMonstersFromLocal(): any {
  //   //TODO: Перерасмотреть получение списка
  //   const monsters = localStorage.getItem('monsters');
  //   if (monsters) {
  //     return JSON.parse(monsters);
  //   }
  // }
}
