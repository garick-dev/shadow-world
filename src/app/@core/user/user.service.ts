import {Inject, Injectable} from '@angular/core';
import {IUser} from "./user.interface";
import {BehaviorSubject, Observable, Subject, tap} from "rxjs";
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  private readonly user: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(this.storage.get('user') ?? null);
  public user$: Observable<IUser> = this.user.asObservable().pipe(
    tap((user) => {
      this.storage.set('user', user);
      this.setStyleForExp(user);
    }
    ),
  );

  private readonly userInfo: IUser = {
    id: 1,
    name: 'GaRiCk',
    level: 1,
    hpMax: 900,
    hp: 900,
    exp: 150,
    expMax: 900,
    minAttack: 150,
    maxAttack: 170,
    currentAttack: -1,
    defence: 0,
  }

  constructor(
    @Inject(LOCAL_STORAGE) private readonly storage: StorageService,
  ) {
    if (this.user.getValue() === null) {
      this.user.next(this.userInfo);
    }
  }

  public setUserInfoToLocal(user: IUser): void {
    this.storage.set('user', user);
  }

  public setStyleForExp(user: IUser): void {
    const expEl = document.querySelector<HTMLElement>(".exp__inner");
    if (expEl) {
      const expPercent = (user.exp / user.expMax) * 100;
      expEl.style.width = `${expPercent}%`;
    }
  }

  public healUser(user: IUser): void {
    if (user.hp < user.hpMax) {
      user.hp += 50;
      if (user.hp > user.hpMax) {
        user.hp = user.hpMax;
      }
    }
    this.storage.set('user', user);
  }

}
