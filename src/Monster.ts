import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;
  public name: string;

  constructor(name: string) {
    this._lifePoints = 85;
    this._strength = 63;
    this.name = name;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;
    if (this._lifePoints === 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter | Fighter) {
    return enemy.receiveDamage(this._strength);
  }
}