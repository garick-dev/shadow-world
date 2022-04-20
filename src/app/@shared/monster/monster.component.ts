import {Component} from '@angular/core';
import {IMonster} from "../../@core/monsters/monsters.intarface";
import {MonstersService} from "../../@core/monsters/monsters.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss']
})
export class MonsterComponent {

  public monster: Observable<IMonster> = this.monstersService.monster$;

  constructor(
    private readonly monstersService: MonstersService,
  ) {
  }

  ngOnInit(): void {

  }


}
