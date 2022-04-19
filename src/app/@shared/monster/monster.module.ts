import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MonsterComponent} from "./monster.component";



@NgModule({
  declarations: [
    MonsterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MonsterComponent,
  ]
})
export class MonsterModule { }
