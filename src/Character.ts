import Archetype, { Mage } from './Archetypes';
import IEnergy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: IEnergy;
  public name: string;

  constructor(nome: string) {
    this.name = nome;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(nome, this._dexterity);
    this._archetype = new Mage(nome);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): IEnergy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) this._lifePoints -= damage;
    if (damage <= 0) this._lifePoints = -1;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: Fighter | Character) {
    const damage = this.strength;
    return enemy.receiveDamage(damage);
  }

  levelUp(): void {
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._energy.amount = 10;
    this._strength += getRandomInt(1, 10);
    
    this._maxLifePoints += getRandomInt(1, 10);
    const maxRace = this.race.maxLifePoints; 

    if (this._maxLifePoints > maxRace) {
      this._maxLifePoints = maxRace;
    }
    this._lifePoints = this._maxLifePoints;
  }

  special() {
    this._strength += getRandomInt(10, 20);
  }
}