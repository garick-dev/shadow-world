export interface IUser {
  id: number,
  name: string,
  level: number,
  hpMax: number,
  hp: number,
  exp: number,
  expMax: number,
  minAttack: number,
  maxAttack: number,
  defence: number,
  currentAttack: number,
  // options: IOptions,
  // skills: ISkills,
  // characteristics: ICharacteristics,
}

export interface IOptions {
  level: number,
  hpMax: number,
  hp: number,
  exp: number,
  expMax: number,
}
export interface ISkills {
  strength: number,
  agility: number,
  stamina: number,
  skew: number,
  parry: number,
}

export interface ICharacteristics {
  minAttack: number,
  maxAttack: number,
  skew: number,
  parry: number,
  critical: number,
  defenceArmor: number,
  defenceShield: number,
  money: number,
}
