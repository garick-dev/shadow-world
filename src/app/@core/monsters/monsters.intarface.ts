export interface IMonster {
  id: number,
  name: string,
  image: string,
  hpMax: number,
  hp: number,
  minAttack: number,
  maxAttack: number,
  currentAttack: number,
  defence: number,
  exp: number,
  description: string,
}

export interface IMonsters {
  monsters: IMonster[],
}
