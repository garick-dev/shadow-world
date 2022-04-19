import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CityFallenComponent} from "./city/city-fallen/city-fallen.component";
import {RouterModule} from "@angular/router";
import { ElementalComponent } from './monster/elemental/elemental.component';
import {UserModule} from "../user/user.module";
import {MonsterModule} from "../monster/monster.module";
import {LogsModule} from "../logs/logs.module";

@NgModule({
  declarations: [
    CityFallenComponent,
    ElementalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UserModule,
    MonsterModule,
    LogsModule,
  ],
  exports: [
    CityFallenComponent,
  ]
})
export class LocationModule { }
