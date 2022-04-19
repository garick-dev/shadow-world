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
    tap((user) => this.storage.set('user', user)),
  );

  private readonly userInfo: IUser = {
    id: 1,
    name: 'GaRiCk',
    level: 1,
    hpMax: 900,
    hp: 900,
    exp: 150,
    expMax: 500,
    minAttack: 150,
    maxAttack: 170,
    currentAttack: -1,
    defence: 0,
  }

  constructor(
    @Inject(LOCAL_STORAGE) private readonly storage: StorageService,
  ) {
    this.user.next(this.userInfo);
    this.setUserInfoToLocal(this.userInfo);
  }

  public setUserInfoToLocal(user: IUser): void {
    if (!localStorage.getItem('user')) {
      const userString = JSON.stringify(this.user);
      localStorage.setItem('user', userString);
    }
    else {
      const userString = JSON.stringify(user);
      localStorage.setItem('user', userString);
      this.user.next(user);
    }
  }


  // public getUserInfoFromLocal(): any {
  //   // TODO: Посмотреть на счет сокращение
  //   const user = localStorage.getItem('user') ;
  //   if (user) {
  //       return JSON.parse(user);
  //   }
  // }
}
